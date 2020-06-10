const mongoose = require ('mongoose');

var equipmentSchema = new mongoose.Schema({
    type: {
        type: String,
        required: 'This field is requied.'
    },
    name: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    }
    
})

module.exports = mongoose.model('Equipment', equipmentSchema);