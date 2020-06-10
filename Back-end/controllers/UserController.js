const User = require ('../models/UserModel');
const jwt = require ('jsonwebtoken');

// Create and save a new user
exports.create = (req, res) => {
    // Validate request 
    if(!req.body.userName) {
        return res.status(400).send ({
            message: "User content can not be empty"
        })
    }

    // Create user
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        // rentedEquip: req.body.rentedEquip
    })
    // Save user in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch (err => {
        res.status(500).send({
            message: err.message
        })
    }) 
}

// Get all user
exports.getAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch (err => {
        res.status(500).send({
            message: err.message
        })
    })
}

// Find a single User with a userId
exports.findOne = (req, res) => {

    User.findById(req.params.userId)
            .then(user => {
                if(!user) {
                    return res.status(404).send({
                        message: "User not found with id " + req.params.userId
                    });            
                }
                res.send(user);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "User not found with id " + req.params.userId
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving equipment with id " + req.params.userId
                });
            });
    
};

exports.delete = (req, res) => {
    
    User.findByIdAndRemove(req.params.userId)
            .then(user => {
                if(!user) {
                    return res.status(400).send ({
                        message: "User not found with id " + req.params.userId
                    })
                } else if (user && authData.user[0].role == 'admin') {
                    res.send({message: "User deleted successfully"});
                } else {
                    res.send({message: "You do not have permission to delete user!!! "})
                }
                
            }). catch(err => {
                if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                    return req.status(400).send ({
                        message: "User not found with id " + req.params.userId
                    })
                } else {
                    return req.status(500).send ({
                        message: "could not delete not with id " + req.params.userId
                    })
                }
            })
    
}

// Update user
exports.update = (req, res) => {
    // Validate request 
    if(!req.body.userName) {
        return res.status(400).send ({
            message: "User content can not be empty"
        })
    }

     // Find user
     User.findByIdAndUpdate(req.params.userId, {
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        // rentedEquip: req.body.rentedEquip
    }, {new: true})
    .then( user => {
        if(!user) {
            return res.status(400).send ({
                message: "User not found with id " + req.params.userId
            })
        } else 
            res.send(user)
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return req.status(400).send ({
                message: "User not found with id " + req.params.userId
            })
        } else {
            return req.status(500).send ({
                message: "Error updating not with id " + req.params.userId
            })
        }
    })
    
} 

// Login user
exports.login = (req, res) => {
    const  userName = req.body.userName;
    const  password = req.body.password ;

    User.findOne({
         $and: [
            { userName: userName },
            { password: password}
        ] 
    }, function (err, user) {
        if (!err && user != null) {
            jwt.sign ({user}, 'secretkey', (err, token) => {
                res.json({
                    token,
                   data:user
                })
            })
        }  else {
            res.send('UserName or password incorrect');
        }
    })
}   

