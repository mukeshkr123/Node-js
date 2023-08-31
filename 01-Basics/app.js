const http = require("http");
const fs = require("fs");

// Create an HTTP server
const server = http.createServer((req, res) => {
  const url = req.url; // Get the URL requested by the client
  const method = req.method; // Get the HTTP method used by the client

  // If the URL is "/", respond with a form for user input
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html><body>");
    res.write(`
      <form action="/message" method="POST">
        <input type="text" name="message" />
        <button type="submit">Submit</button>
      </form>
    `);
    res.write("</body></html>");
    return res.end();
  }

  // If the URL is "/message" and the method is "POST", handle form submission
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1]; // Extract the message from the request body
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.error("Error writing to file:", err);
        }
        res.statusCode = 302; // Set the response status code to indicate a redirect
        res.setHeader("Location", "/"); // Set the "Location" header to redirect to "/"
        return res.end(); // Send the response and end the request
      });
    });
  } else {
    // For any other URL or method, respond with a simple "Hello world" message
    res.setHeader("Content-Type", "text/html");
    res.write("<html><h1>Hello world</h1></html>");
    res.end();
  }
});

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server is up and running");
});
