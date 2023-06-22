// local repo-level terminal cmd: 'npm i express' & import into variable 'express' - https://expressjs.com/en/starter/installing.html
const express = require("express");
// local repo-level terminal cmd: 'npm i path' & import into variable 'path' - https://www.npmjs.com/package/path
const path = require("path");

// storing invoked express object in variable 'app'
const app = express();

// local repo-level terminal cmd: 'npm i dotenv' and store in variable 'port' - https://www.npmjs.com/package/dotenv
// local repo-level terminal cmd: 'touch .env' (we'll define some vars in there later)
const port = process.env.PORT || 3001;

// express route handler called when an HTTP request is made at any path ("/*")
// callback function taking HTTP request and response objects as arguments
app.get("/*", function (req, res) {
    // HTTP response object's .sendFile method()
    // 'path' package's .join method constructs the file path
    // local repo-level terminal cmd: 'npm run build' & serve the 'index.html' file within the 'build' directory
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// express server listening at port
// callback function console log
app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
});
