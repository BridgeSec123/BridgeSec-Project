// // config/oktaAuth.js
// const jwt = require('express-jwt');
// const jwksRsa = require('jwks-rsa');
// const dotenv = require('dotenv');

// dotenv.config();

// const oktaAuth = jwt({
//   // Dynamically provide a signing key based on the kid in the header and the signing keys provided by Okta
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: `${process.env.OKTA_ISSUER}/v1/keys`
//   }),

//   // Validate the audience and the issuer
//   audience: process.env.OKTA_CLIENT_ID,
//   issuer: process.env.OKTA_ISSUER,
//   algorithms: ['RS256']
// });

// module.exports = oktaAuth;
