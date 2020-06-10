const Management = require ('../models/ManageModel');
const jwt = require ('jsonwebtoken');

// Create management
exports.create = (req, res) => {
    // Validate request 
    if(!req.body.userID) {
        return res.status(400).send ({
            message: "User content can not be empty"
        })
    }

    // Create management
    const management = new Management({
        userID: req.body.userID,
        equipmentID: req.body.equipmentID,
        toDate: req.body.toDate,
        fromDate: req.body.fromDate
    })
    // Save management in the database
    management.save()
    .then(data => {
        res.send(data);
    }).catch (err => {
        res.status(500).send({
            message: err.message
        })
    }) 
}

// Get all management
exports.getAll = (req, res) => {
    Management.find()
    .then(managements => {
        res.send(managements)
    }).catch (err => {
        res.status(500).send({
            message: err.message
        })
    })
}

// Find a single management with a managementId
exports.findOne = (req, res) => {

    var token = verifyToken(req, res);
    jwt.verify(token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(404);
        } else {
            Management.findById(req.params.managementId)
            .then(management => {
                if(!management) {
                    return res.status(404).send({
                        message: "Management not found with id " + req.params.managementId
                    });            
                }
                res.send(management);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Management not found with id " + req.params.managementId
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving equipment with id " + req.params.managementId
                });
            });
        }
    });

    
};

// Update management
exports.update = (req, res) => {
    // Validate request 
    if(!req.body.userID) {
        return res.status(400).send ({
            message: "User content can not be empty"
        })
    }

    var token = verifyToken(req, res);
    jwt.verify(token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(404);
        } else {
            // Find management
            Management.findByIdAndUpdate(req.params.managementId, {
                userID: req.body.userID,
                equipmentID: req.body.equipmentID,
                toDate: req.body.toDate,
                fromDate: req.body.fromDate
            }, {new: true})
            .then( management => {
                if(!management) {
                    return res.status(400).send ({
                        message: "management not found with id " + req.params.managementId
                    })
                } else 
                    res.send(management)
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return req.status(400).send ({
                        message: "management not found with id " + req.params.managementId
                    })
                } else {
                    return req.status(500).send ({
                        message: "Error updating not with id " + req.params.managementId
                    })
                }
            })
        }
    });

    
} 

exports.delete = (req, res) => {
    var token = verifyToken(req, res);
    jwt.verify(token, 'secretkey', (err, authData) => {
        if (err) {
            res.sendStatus(404);
        } else {
            Management.findByIdAndRemove(req.params.managementId)
            .then(management => {
                if(!management) {
                    return res.status(400).send ({
                        message: "Management not found with id " + req.params.managementId
                    })
                } else if (management && authData.user[0].role == 'admin') {
                    res.send({message: "Management deleted successfully"});
                } else {
                    res.send({message: "You do not have permission to delete user!!! "})
                }
                
            }). catch(err => {
                if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return req.status(400).send ({
                        message: "Management not found with id " + req.params.managementId
                    })
                } else {
                    return req.status(500).send ({
                        message: "could not delete not with id " + req.params.managementId
                    })
                }
            })
        }
    });
    
}

// FORMAT OF TOKEN
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization']

    // Check if Bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ')
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        return bearerToken;
        //next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}