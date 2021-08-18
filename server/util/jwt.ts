const jwt = require("node.jwt");

const secret = jwt.secret("svanrj");

var createJwtToken: any = (uid: string) => {
  const payload = {
    sub: "svanrj",
    iss: "https://github.com/sanqi377/societies",
    exp: Date.now() / 1000 + 60 * 60 * 24 * 2,
    nbf: Date.now() / 1000 - 60 * 5,
    iat: Date.now() / 1000,
    data: {
      uid: uid,
      authority: new Date().getTime(),
    },
  };

  var token = jwt.encode(payload, secret);

  return token;
};


var Verification: any = (token: string) => {
  if (token) {
    try {
      var decoded = jwt.decode(token, secret);
      return decoded
    } catch (err) {
      return false
    }
  }
  return false
};

module.exports = {
  createJwtToken,
  Verification
};
