const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://test:test@cluster0.stnu2.mongodb.net/e-commerce?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected Successfully...."))
  .catch((err) => console.log(err));
