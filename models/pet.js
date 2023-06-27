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
    breed: [{
        type: String,
        required: true
    }],
    age: {
        type: Number,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    weight: {
        type: Number,
        required: true,
    },
    photo: {
        type: String
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
    medicalHistory: [{
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