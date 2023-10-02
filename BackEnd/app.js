import path from "path";
import express from "express";
import { port } from "./config/config.js";
import connectDB from "./config/db.js";
import chalk from "chalk";
import userRouter from "./routes/users.js";
import postsRouter from "./routes/posts.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import ratelit, { rateLimit } from "express-rate-limit";
import helmet from "helmet";
const PORT = port || 3000;

const app = express();
app.use(morgan("dev"));

var whitelist = ["http://localhost:3000", "http://localhost:5173"];

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // Reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // Disable CORS for this request
  }
  callback(null, corsOptions); // Callback expects two parameters: error and options
};

app.use(express.json());
app.use(helmet());
app.use(cookieParser());

const apiRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  message: "Rate limit exceeded",
});

app.use(apiRateLimit);

// router managment
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postsRouter);

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontEnd/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontEnd", "dist", "index.html"));
  });
} else {
  app.get("/api", (req, res) => {
    res.send("API is running");
  });
}

404;
app.use((req, res, next) => {
  next(
    customError(
      404,
      `${req.originalUrl} the page that you're looking is not found not found`
    )
  );
});

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Internal Server Error";

  res.status(status).send(message);
});

// database connection
connectDB();
app.listen(PORT, () => {
  console.log(process.env.PORT);
  console.log(
    `${chalk.green.bold("Server")} is listening on port ${chalk.green.bold(
      PORT
    )} 🚀`
  );
});
