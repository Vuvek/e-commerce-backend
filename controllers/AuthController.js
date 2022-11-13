const User = require("../db/modals/User");

class AuthController {
  static async register(req, res) {
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
  }
  static async login(req, res) {
    if (req.body.email && req.body.password) {
      let user = await User.findOne(req.body).select("-password");
      if (user) {
        res.send(user);
      } else {
        res.send({ result: "No User Found" });
      }
    } else {
      res.send({ result: "Invalid Credentials" });
    }
  }
}

module.exports = AuthController;
