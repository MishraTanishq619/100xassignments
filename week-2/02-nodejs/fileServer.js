/**
  You need to create an express HTTP server in Node.js which will handle the logic of a file server.
  - Use built in Node.js `fs` module
  The expected API endpoints are defined below,
  1. GET /files - Returns a list of files present in `./files/` directory
    Response: 200 OK with an array of file names in JSON format.
    Example: GET http://localhost:3000/files
  2. GET /file/:filename - Returns content of given file by name
     Description: Use the filename from the request path parameter to read the file from `./files/` directory
     Response: 200 OK with the file content as the response body if found, or 404 Not Found if not found. Should return `File not found` as text if file is not found
     Example: GET http://localhost:3000/file/example.txt
    - For any other route not defined in the server return 404
    Testing the server - run `npm run test-fileServer` command in terminal
 */
<<<<<<< HEAD
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();


module.exports = app;
=======
const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Files ...");
});

app.get("/file/:filename", (req, res) => {
  let filename = req.params.filename;
  //   console.log(req.params.filename);
  fs.readFile(`files/${filename}`, (err, data) => {
    if (err) {
      res.status(404).send("File not found");
    }
    res.status(200).send(data);
  });
});

app.get("/files", (req, res) => {
  var q = `<ul>`;
  var list = [];
  fs.readdir("files", (err, files) => {
    // async callback
    files.forEach((i) => {
      list.push(i);
      //   console.log(i);
      q += `<li>${i}</li>`;
    });
    q += `</ul>`;
    // console.log(list, q);
    res.status(200).send(list);
  });
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});

// app.all("*", (req, res) => {
//   res.status(404).send("Route not found");
// });

// app.listen(3000, () => {
//   console.log(`Example app listening on port 3000`);
// });

module.exports = app;
>>>>>>> 6590e11 (23/2/24)
