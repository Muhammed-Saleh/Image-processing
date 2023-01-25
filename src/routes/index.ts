import express from "express";

const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Hello from routes");
});

export default routes;
