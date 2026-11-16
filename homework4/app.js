//Mariam Nbrawi
//Kamil Nassar

const http = require("http");
const path = require("path");
const fs = require("fs");

//server port
const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath;
  let contentType = "text/html";
  //const filePath = path.join(__dirname, "templates", "page.html");

  if (req.url === "/" || req.url === "/page.html") {
    filePath = path.join(__dirname, "templates", "page.html");
  } else if (req.url === "/about.html") {
    filePath = path.join(__dirname, "templates", "about.html");
  } else if (req.url === "/contact.html") {
    filePath = path.join(__dirname, "templates", "contact.html");
  } else if (req.url.startsWith("/css/")) {
    filePath = path.join(__dirname, req.url);
    contentType = "text/css";
  } else if (req.url.startsWith("/images/")) {
    filePath = path.join(__dirname, req.url);
    if (req.url.endsWith(".png")) contentType = "image/png";
    else if (req.url.endsWith(".jpg") || req.url.endsWith(".jpeg"))
      contentType = "image/jpeg";
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
    return;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Page not found!!!");
      return;
    }

    res.writeHead(200, { "Content-Type": contentType });

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(
    `Server running Successfully \nport: ${PORT}\nhttp://localhost:3000`,
  );
});
