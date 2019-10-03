const Joi = require("joi");

module.exports = {
  // POST /v1/auth/register
  register: {
    body: {
      ip: Joi.string().required(),
      fingerprint: Joi.object().required()
    }
  },

  // POST /v1/auth/login
  login: {
    body: {
      ip: Joi.string().required(),
      fingerprint: Joi.object().required()
    }
  },

  // POST /v1/auth/facebook
  // POST /v1/auth/google

  // POST /v1/auth/refresh
  refresh: {
    body: {
      ip: Joi.string().required(),
      fingerprint: Joi.object().required()
    }
  }
};
