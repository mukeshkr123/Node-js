const http = require("http");
const { handleRequests } = require("./routes"); // Import request handling logic

// Create an HTTP server
const server = http.createServer(handleRequests);

// Start the server and listen on port 3000
server.listen(3000, () => {
  console.log("Server is up and running");
});
