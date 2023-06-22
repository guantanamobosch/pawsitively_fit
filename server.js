const express = require("express");

const app = express();

const port = process.env.PORT || 3001;

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, function () {
    console.log(`Express app running on port ${port}`);
});
