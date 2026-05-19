const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    FirstName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    LastName: {
        type: String,
        minlength: 3,
        maxlength: 20,
        required: true
    },
    Age: {
        type: Number,
        required: true,
        ///add restriction 
        min: 14,
        max: 100
    },
    Gender: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    Photo: {
        type: String
    }

})

module.exports = mongoose.model('User', userSchema);