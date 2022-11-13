const express = require("express");
const cors = require("cors");
require("./db/connection");
const publicRoutes = require("./routes/indexRoute");
const authRoutes = require("./routes/AuthRoutes");

const PORT = process.env.PORT ?? 4000;
// express app
const app = express();
// important middleware
app.use(cors());
app.use(express.json());
// Routes
app.use(publicRoutes);
app.use(authRoutes);

app.listen(PORT, () => {
  console.log("Server is Up and Running on port", PORT);
});
