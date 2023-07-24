function authenticate(req, res, next) {
  var authHeader = req.headers.authorization;
  if (!authHeader) {
    var err = new Error("Authorization header required!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    next(err);
    return;
  }
  var auth = new Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  var user = auth[0];
  var pass = auth[1];
  if (user == process.env.USERNAME && pass == process.env.PASSWORD) {
    return true;
  } else {
    var err = new Error("You are not authenticated!");
    res.setHeader("WWW-Authenticate", "Basic");
    err.status = 401;
    next(err);
  }
}

module.exports = { authenticate };
