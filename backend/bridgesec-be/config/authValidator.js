const OktaJwtVerifier = require('@okta/jwt-verifier');

// Configure the Okta JWT Verifier
const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: process.env.OKTA_CLIENT_ID,
    issuer: process.env.OKTA_ISSUER,
  assertClaims: {
    aud: process.env.OKTA_AUDI, 
  },
});
console.log("authvalidator js file called ------------------------")
// Middleware to validate the access token
const validateAccessToken = async (req, res, next) => {
    console.log("validateAccessToken -***************************-")
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');
    console.log("token in auth validator js file  ::::----- ", token);
  if (!token) {
    return res.status(401).send({ error: 'Token is required' });
  }

  try {
    var audi="[sivajioieciam.oktapreview.com,sivajioieciam.oktapreview.com]";
   // var audi=process.env.OKTA_CLIENT_ID;
   console.log("audi :: "+audi);
    const jwt = await oktaJwtVerifier.verifyAccessToken(token, audi);
    console.log('Token is valid: ************************************   ', jwt);
    req.user = jwt.claims;
    next();
  } catch (err) {
    console.error('Token validation failed:', err.message);
    res.status(401).send({ error: 'Invalid token' });
  }
};

module.exports = validateAccessToken;
