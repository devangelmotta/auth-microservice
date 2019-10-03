const mongoose = require("mongoose");

/**
 * Refresh Token Schema
 * @private
 */
const authTokenData = new mongoose.Schema({
  ip: {
    type: String,
    required: true
  },
  fingerprint: {
    type: Object,
    required: true
  }
});

const noteSchema = new mongoose.Schema(
  {
    ip: {
      type: String,
      required: true
    },
    fingerprint: {
      type: Object,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

/**
 * @typedef generateToken
 */
const AuthTokenData = mongoose.model("authTokenData", authTokenData);

/**
 * @typedef scheme notes
 */
const noteScheme = mongoose.model("Notes", authTokenData);

module.exports = { noteScheme, AuthTokenData };
