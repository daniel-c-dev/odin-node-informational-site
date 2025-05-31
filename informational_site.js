/*const http = require("http");
const url = require("url");
const fs = require("fs");

http
  .createServer(function (req, res) {
    const myURL = url.parse(req.url, true);
    let filename = "";

    if (myURL.pathname === "/") {
      filename = "." + "/index.html";
    } else {
      filename = "." + myURL.pathname + ".html";
    }

    fs.readFile(filename, function (err, data) {
      if (err) {
        fs.readFile("404.html", function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            return res.end("Error reading 404.html");
          }
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          res.end();
        });
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  })
  .listen(8080);
*/

const express = require("express");
const path = require("path");
const app = express();

const homePage = path.join(__dirname, "index.html");
const aboutPage = path.join(__dirname, "about.html");
const contactPage = path.join(__dirname, "contact-me.html");
const errorPage = path.join(__dirname, "404.html");

app.get("/", (req, res) => res.sendFile(homePage));
app.get("/about", (req, res) => res.sendFile(aboutPage));
app.get("/contact-me", (req, res) => res.sendFile(contactPage));
app.use((req, res) => res.status(404).sendFile(errorPage));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Basic informational site - listening on port ${PORT}`);
});
