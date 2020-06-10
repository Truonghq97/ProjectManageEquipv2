const mongoose = require ('mongoose');

var manageSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: 'This field is requied.'
    },
    equipmentID: {
        type: String
    },
    fromDate: {
        type: String
    },
    toDate: {
        type: String
    },
    
    
})

module.exports = mongoose.model('Manage', manageSchema);