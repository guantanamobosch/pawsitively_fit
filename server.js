// import modules
const express = require("express"); // - https://expressjs.com/en/starter/installing.html
const path = require("path"); // - https://www.npmjs.com/package/path
require("dotenv").config(); // - https://www.npmjs.com/package/dotenv#-documentation
require("./config/database"); // - connect to MongoDB

// storing invoked express object in variable 'app'
const app = express();

// setting the port
const port = process.env.PORT || 3001;

// express route handler (for all * routes)
app.get("/*", function (req, res) {
    // HTTP response object's .sendFile method()
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// express server listening at port
app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
});
