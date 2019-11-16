const express = require("express");
const bodyParser = require("body-parser");

// Set up the express app
const app = express();

// Use this parse the request body text
app.use(bodyParser.text());

// GET function used to recieve the request
app.get("/api", (request, response) => {
 const text = request.body;

 // checks if text is type string
 if (typeof text === 'string') {
   response.status(200).send({
     status: 200,
     response: processRequest(text)
   });
 }

 // if text type is not string then we cannot parse data
 else {
   response.status(400).send({
     status: 400,
     message:
       "Invalid request. Please make sure your request has a raw text body."
   });
 }
});

// set PORT where the API will run
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

// Function to process the CSV and return it in the proper format. Returns String.
function processRequest(text){
  let respArray = text.split(",")
  let splitString = ''
  respArray.forEach(element => {
    splitString = splitString + `[${element}]`
  });
  return splitString;
}
