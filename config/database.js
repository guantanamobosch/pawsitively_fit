
db.on("connected", function () {
    console.log(`Connected to ${db.name} at ${db.host};${db.port}`);
});