const httpStatus = require("http-status");
const passport = require("passport");
var jwt = require("jsonwebtoken");
const { jwtSecret, jwtExpirationInterval } = require("../../config/vars");
const { AuthTokenData, noteScheme } = require("../models/authDataUser");

const APIError = require("../utils/APIError");

const ADMIN = "admin";
const LOGGED_USER = "_loggedUser";

const handleJWT = (req, res, next, roles) => async (err, user, info) => {
  const error = err || info;
  const logIn = Promise.promisify(req.logIn);
  const apiError = new APIError({
    message: error ? error.message : "Unauthorized",
    status: httpStatus.UNAUTHORIZED,
    stack: error ? error.stack : undefined
  });

  try {
    if (error || !user) throw error;
    await logIn(user, { session: false });
  } catch (e) {
    return next(apiError);
  }

  if (roles === LOGGED_USER) {
    if (user.role !== "admin" && req.params.userId !== user._id.toString()) {
      apiError.status = httpStatus.FORBIDDEN;
      apiError.message = "Forbidden";
      return next(apiError);
    }
  } else if (!roles.includes(user.role)) {
    apiError.status = httpStatus.FORBIDDEN;
    apiError.message = "Forbidden";
    return next(apiError);
  } else if (err || !user) {
    return next(apiError);
  }

  req.user = user;

  return next();
};

exports.verifyTokens = async (data) => {
  const { token } = data;
  try {
    var decoded = jwt.verify(token, jwtSecret);
    return {
      sessions: false,
      invalidToken: false,
      data: token
    };
  } catch (err) {
    console.log("Error catch ", err);
    let session = await this.checkSessions(data);
    return session;
  }
};

exports.checkSessions = async (data) => {
  let { ip, refreshToken } = data;
  const allSessions = await noteScheme.find({ ip });
  if (refreshToken) {
    let token = this.generateSession(data);
    return {
      invalidToken: false,
      sessions: false,
      data: token
    };
  } else if (allSessions.length > 0) {
    return {
      invalidToken: true,
      sessions: true,
      data: allSessions
    };
  } else {
    let newSession = this.generateSession(data);
    return {
      invalidToken: true,
      sessions: false,
      data: newSession
    };
  }
};

exports.generateSession = (data) => {
  const { ip, osName, deviceType, deviceBrand } = data;
  return jwt.sign(
    {
      data: { ip, osName, deviceType, deviceBrand }
    },
    jwtSecret,
    { expiresIn: "1h" }
  );
};

exports.ADMIN = ADMIN;
exports.LOGGED_USER = LOGGED_USER;

exports.authorize = (roles = User.roles) => (req, res, next) =>
  passport.authenticate(
    "jwt",
    { session: false },
    handleJWT(req, res, next, roles)
  )(req, res, next);

exports.oAuth = (service) => passport.authenticate(service, { session: false });
