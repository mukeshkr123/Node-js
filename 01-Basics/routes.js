const fs = require("fs");

// Handle requests based on URL and method
function handleRequests(req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    respondWithForm(res);
  } else if (url === "/message" && method === "POST") {
    handleFormSubmission(req, res);
  } else {
    respondWithHelloWorld(res);
  }
}

// Respond with the form for user input
function respondWithForm(res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>");
  res.write(`
    <form action="/message" method="POST">
      <input type="text" name="message" />
      <button type="submit">Submit</button>
    </form>
  `);
  res.write("</body></html>");
  res.end();
}

// Handle form submission and redirection
function handleFormSubmission(req, res) {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    const parsedBody = Buffer.concat(body).toString();
    const message = parsedBody.split("=")[1];
    fs.writeFile("message.txt", message, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      }
      res.statusCode = 302;
      res.setHeader("Location", "/");
      return res.end();
    });
  });
}

// Respond with a simple "Hello world" message
function respondWithHelloWorld(res) {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><h1>Hello world</h1></html>");
  res.end();
}

module.exports = { handleRequests };
