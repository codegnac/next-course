const express = require("express");
const next = require("next");

const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/server-endpoint", (req, res) => {
    res.json({ hey: "thanks for calling our API" });
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
