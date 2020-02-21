const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
  const headers = req.headers["authorization"];
  if (headers) {
    const token = headers.split(" ")[1];

    jwt.verify(token, "TRIPSECRET", (error, decoded) => {
      if (error) {
        res.json({ success: false, message: "unable to verify token" });
      } else if (decoded) {
        next();
      }
    });
  } else {
    res.json({ success: false, message: "unable to verify token" });
  }
};

module.exports = authentication;
