const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for vets
const vetSchema = new Schema ({
    user: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet"
    }],
    office: {
        type: String
    }
})

const Vet = mongoose.model('Vet', vetSchema);

module.exports = Vet;