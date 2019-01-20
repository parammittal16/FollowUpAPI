const db = require('../models/index');
const bcrypt = require('bcryptjs');
const config = require('../config');

module.exports = {
    login: (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        const query = db.Users.findOne({
            where: {
                username: username
            }
        })
        const verifyPassword = query.then(exists => {
            if(exists)
                return bcrypt.compare(password, exists.password);
            else 
                return 0;
        });
        Promise.all([query, verifyPassword]).then(([resA, resB]) => {
            if(resB === true) {
                const token = config.generateToken({id: resA.id}, '24h');
                resA.password = undefined;
                resA.id = undefined;
                res.status(200).json({user: resA, token: token});
            } else if(resB === false) {
                res.status(401).json({err: "Unauthorized"});
            } else if(resB === 0) {
                res.status(404).json({err: "Not found"});
            }
        })
        .catch((err) => {
            res.status(500).json({err: err});
        })
    },

    createUser: (req, res) => {
        let user = {
            username: req.body.username,
            password: req.body.password,
            role: req.body.role
        };
        db.Users.create(user)
            .then(user => res.status(200).send(user))
            .catch(err => res.status(500).send(err));  
    },

    protectedRoute: (req, res) => {
        console.log("You are here, ",);
    }
}