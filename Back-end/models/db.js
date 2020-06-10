const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ManageEquip', {useNewUrlParser: true}, (err)=> {
    if (!err) {
        console.log('MongoDB Connection Success.')
    } else {
        console.log('Error in DB Connection' + err)
    }
});

require('./UserModel');
require('./EquipmentModel');