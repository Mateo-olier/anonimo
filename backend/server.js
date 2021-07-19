import express from "express";
import data from "./data.js";
const app = express();
app.get("/api/status", (req, res) => {
  res.send(data.status);
});
app.get("/api/status/:id", (req, res) => {
  const status = data.status.find((x) => x.id === req.params.id);
  if (status) {
    res.send(status);
  } else {
    res.status(404).send({ message: "Status not found" });
  }
});
app.get("/", (req, res) => {
  res.send("Hellow World");
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server conect", port);
});
