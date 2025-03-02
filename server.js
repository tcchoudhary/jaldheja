const express = require("express");
const app = express();
const path = require("path");
const PORT = 4002;
const fs = require("fs");

app.use(express.static(path.resolve(__dirname, "build"), { maxAge: "300d" }));
const indexPath = path.resolve(__dirname, "build", "index.html");

app.get('*', async (req, res, next) => {
  try {
    const htmlData = fs.readFileSync(indexPath, 'utf8');
    const modifiedHtmlData = htmlData.replace(
      /<link rel="canonical" href="https:\/\/growthgrids\.com\/.*">/, 
      `<link rel="canonical" href="https://Jaladhija.com${req.url}">`
    );
    return res.send(modifiedHtmlData);
  } catch (error) {
    console.error('Error during file reading', error);
    return res.status(404).end();
  }
});

app.get("/sitemap.xml", (req, res) => {
  res.set("Content-Type", "application/xml");
  res.sendFile(path.join(__dirname, "build", "sitemap.xml"));
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "robots.txt"));
});

app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
  console.log(`Listening on port ${PORT}...`);
});
