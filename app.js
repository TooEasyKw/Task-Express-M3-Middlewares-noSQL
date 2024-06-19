require("dotenv").config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const app = express();
const postsRoutes = require("./api/posts/posts.routes");
const connectDb = require("./database");
const errorHandler = require("./Middlewares/errorHandler");
const notFoundHandler = require("./Middlewares/notFoundHandler");
const cors = require("cors");

connectDb();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/posts", postsRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
