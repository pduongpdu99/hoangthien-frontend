// import libs
import express from "express";
import dotenv from "dotenv";
import { paths } from "./page_requests/paths.js";

// Pre-arguments
// const HOSTNAME = dotenv.config().parsed["HOSTNAME"] || "localhost";
const PORT = process.env.PORT || 5000;
const IP = dotenv.config().parsed["IP"] || "127.0.0.1";

// app init
const app = express();

// statics
const pathSources = [
  {
    prefix: "/dist",
    path: "./dist",
  },
  {
    prefix: "/",
    path: "./src",
  },
  {
    prefix: "/",
    path: "./assets",
  },
  {
    prefix: "/",
    path: "./public",
  },
  {
    prefix: "/widgets",
    path: "./widgets",
  },
];
pathSources.forEach((path) => {
  return app.use(path.prefix, express.static(path.path));
});

// listen
app.listen(PORT, IP, listenCallback);

// get page
for (const [path, callback] of Object.entries(paths)) app.get(path, callback);

function listenCallback() {
  const url = `http://${IP}:${PORT}`;
  console.log(`Server run at ${url}`);
}
