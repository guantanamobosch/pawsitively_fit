// local repo-level terminal cmd: 'npm i mongoose' & import into variable 'mongoose'
const mongoose = require("mongoose");

// mongoose .connect method accessing variable 'MONGO_DB_URI' in .env
mongoose.connect(process.env.MONGO_DB_URI);

// mongoose connection listener
const db = mongoose.connection;

db.on("connected", function () {
    console.log(`Connected to ${db.name} at ${db.host};${db.port}`);
});
