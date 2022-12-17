const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world this is a node app by Neel!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}`);
});
