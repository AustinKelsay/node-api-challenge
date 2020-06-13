const express = require('express');
const projectRouter = require("./routers/projectRouter")
const actionRouter = require("./routers/actionRouter")

const server = express();
const port = (process.env.PORT || 5000)

server.use(express.json())

server.use("/project", projectRouter)
server.use("/action", actionRouter)

server.get("/", (req, res) => {
  res.json({
  message: "Howdy!"
  })
});

module.exports = {server, port};