const path = require("path");

const express = require("express"),
  app = express();

app.use(express.static(path.join(__dirname, "assets")));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Responsive Webpage is hosted on port : ${port} ♠ 🐾 🐒`);
});

process.on("unhandledRejection", (err) => {
  console.error(err.name, err.message);
  console.log("Unhandler Rejection 💥👀 Shutting down..");
  server.close(() => {
    process.exit(1);
  });
});
