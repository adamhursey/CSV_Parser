const express = require("express");
const bodyParser = require("body-parser");

// Set up the express app
const app = express();

// Use this parse the request body text
app.use(bodyParser.text());

// GET function used to recieve the request
app.get("/api", (request, response) => {
  const text = request.body;
  response.status(200).send(text);
});

// set PORT where the API will run
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
