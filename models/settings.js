const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema(
    {
        name: String,
        address: String,
        phone: Number,
        email: String
    },
    {
        timestamps: true
    }
);



module.exports = mongoose.model("Contact", contactSchema)


