const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Age: {
        type: Number
    },
    Gender: {
        type: String
    },
    emailId: {
        type: String
    },
    password: {
        type: String
    },
    Photo: {
        type: String
    }

})

module.exports = mongoose.model('User', userSchema);