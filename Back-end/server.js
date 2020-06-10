// import npm modules
require ('./models/db');
var express = require ('express');
var cors = require('cors');
const bodyparser = require ('body-parser')
var jwtDecode = require('jwt-decode');

// initialize the api
var app = express();

// initialize middleware
app.use(bodyparser.urlencoded({
    extended: true
}))
app.use(bodyparser.json());
app.use(cors());

let apiRoutes = require ('./api-routes')


// app.use('/api', function(req, res, next) {  
//     const bearerHeader = req.headers['authorization']

//     // Check if Bearer is undefined
//     if (typeof bearerHeader !== 'undefined') {
//         // Split at the space
//         const bearer = bearerHeader.split(' ')
//         // Get token from array
//         const bearerToken = bearer[1];
//         // Set the token
//         req.token = bearerToken;
//         // Next middleware
//         next();
//     } else {
//         // Forbidden
//         res.sendStatus(403);
//     }
//   });



 app.use('/api',verifyToken, apiRoutes)
 app.use('/login', apiRoutes)
 

 app.listen(8000, () => {
    console.log('Express server start at port : 8000')
})

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
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

// Permission User
function permit(req, res, next) {
    const token = req.token
    var decoded = jwtDecode(token)

    if (decoded.user) {
        next();
    } else {
        res.status(403).json({message: "Forbidden"});
    }
  }