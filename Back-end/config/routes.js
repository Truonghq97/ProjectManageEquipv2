
let router = require('express').Router();


var users  = require  ('../controllers/UserController');

router.route('/users').get(users.create);

// module.exports  = (app) => {
    
//     const users  = require  ('../controllers/UserController');
//     const equipments = require ('../controllers/EquipmentController');
//     const management = require ('../controllers/ManageModel');

//     // User
//     app.post('/user/create', users.create);
//     app.get('/user/create', users.getAll)
//     app.get('/user/:userId', users.findOne );
//     app.put('/user/:userId',  users.update)
//     app.delete('/user/:userId', users.delete);
//     app.post('/user/login', users.login);

//     // Equipment
//     app.post('/equipment/create', equipments.create);
//     app.get('/equipment/create', equipments.getAll);
//     app.get('/equipment/:equipmentId', equipments.findOne);
//     app.put('/equipment/:equipmentId', equipments.update);
//     app.delete('/equipment/:equipmentId', equipments.delete);

//     // Management
//     app.post('/management/create', management.create);
//     app.get('/management/create', management.getAll);
//     app.get('/management/:managementId', management.findOne);
//     app.put('/management/:managementId', management.update);
//     app.delete('/management/:managementId', management.delete);

// }