const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

//  creating server
const server = http.createServer(function (req, res) {
  // Parse the full URL
  const parsedUrl = url.parse(req.url, true);
  
  // Extract pathname and query
  const pathname = parsedUrl.pathname;
  const query = parsedUrl.query;

  if (pathname === '/') {
    try {
      const data = fs.readFileSync(path.join(__dirname, 'templates', 'page.html'), 'utf8');

      // If "name" is provided in the query, replace the placeholder in HTML
      let name = query.name || 'Guest'; // Default to 'Guest' if name isn't provided
      const personalizedContent = data.replace('{{name}}', name);

      // Send the modified HTML file to the client
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(personalizedContent);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>Server Error</h1>');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>Page not found</h1>');
  }
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
