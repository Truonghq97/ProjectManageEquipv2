
var users  = require  ('./controllers/UserController');
var equipments = require ('./controllers/EquipmentController');


var express = require('express');
var router = express.Router();



// Api User
router.route('/users').get(users.getAll);
router.route('/user/add').post(users.create);
router.route('/user/search/:userId').get(users.findOne);
router.route('/user/update/:userId').put(users.update);
router.route('/user/delete/:userId').delete(users.delete);
router.route('/').post(users.login);

// Api Equipment
router.route('/equipments').get(equipments.getAll);
router.route('/equipment/add').post(equipments.create);
router.route('/equipment/search/:equipmentId').get(equipments.findOne);
router.route('/equipment/update/:equipmentId').put(equipments.update);
router.route('/equipment/delete/:equipmentId').delete(equipments.delete);

module.exports = router;