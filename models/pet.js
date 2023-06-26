const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for pets
const petSchema = new Schema ({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    breed: {
        type: String,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    activity: {
        type: String,
    },
    description: {
        type: String,
    },
    medications: [{
        type: String
    }],
    medicalhistory: [{
        type: String
    }],
    vet: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vet"
    }],
},{
    timestamps: true
})

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;