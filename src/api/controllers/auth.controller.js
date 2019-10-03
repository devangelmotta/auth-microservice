const { verifyTokens } = require("../middlewares/auth");
const httpStatus = require("http-status");
/**
 * Returns jwt token session
 * @public
 */
exports.login = async (req, res, next) => {
  try {
    let verifySessionToken = await verifyTokens(req.body);
    res.status(httpStatus.OK);
    res.json({
      status: true,
      response: verifySessionToken
    });
  } catch (error) {
    res.json({
      status: false,
      response: error
    });
  }
};

/**
 * Returns a new jwt when given a valid refresh token
 * @public
 */
