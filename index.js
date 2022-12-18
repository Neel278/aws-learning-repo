const express = require("express");
const dotenv = require("dotenv");
const fileUpload = require("express-fileupload");
const awsService = require("./awsService");
dotenv.config();

const app = express();

app.use(fileUpload());
// app.use(express.json());
app.use(express.static("public"));

app.get("/", async (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/upload", async (req, res) => {
  const { image } = req.files;
  try {
    await awsService.uploadImage(image.name, image.data);
  } catch (e) {
    console.log(e);
  }
  res.redirect("/");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}`);
});
