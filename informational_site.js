const http = require("http");
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
