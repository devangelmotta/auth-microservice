const express = require("express");
const validate = require("express-validation");
const controller = require("../../controllers/auth.controller");
const { login } = require("../../validations/auth.validation");

const router = express.Router();

/**
 * @api {post} v1/auth/login Login
 * @apiDescription Get an accessToken
 * @apiVersion 1.0.0
 * @apiName Login
 * @apiGroup Auth
 * @apiPermission public
 *
 * @apiParam  {String}  user.ip             User's ip
 * @apiParam  {String}  user.osName         User's os name
 * @apiParam  {String}  user.deviceType     User's device type
 * @apiParam  {String}  user.deviceBrand    User's device brand
 * @apiParam  {Date}    user.createdAt      Timestamp
 *
 * @apiSuccess  {String}  user.token          User's token
 * @apiSuccess  {Date}    user.createdAt      Timestamp
 *
 * @apiError (Bad Request 400)  ValidationError  Some parameters may contain invalid values
 * @apiError (Unauthorized 401)  Unauthorized    Wrong connection
 */
router.route("/login").post(validate(login), controller.login);

module.exports = router;
