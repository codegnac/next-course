export default (req, res) => {
  if (req.method === "GET") {
    res.status(200);
    res.json({ name: "codegnac" });
  } else {
    res.status(404);
    res.json({});
  }
};
