class IndexController {
  static index(req, res) {
    res.send("Hello from IndexController");
  }
  static home(req, res) {
    res.send("From Home of IndexController");
  }
}

module.exports = IndexController;
