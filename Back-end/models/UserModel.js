const mongoose = require ('mongoose');

var userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: 'This field is requied.'
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    role: {
        type: String
    },
    // rentedEquip: {
    //     type: String
    // },
})

module.exports = mongoose.model('User', userSchema);