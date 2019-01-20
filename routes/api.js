const express = require('express');
const userController = require('../controllers/users');
const passport = require('passport');
const router = express.Router();

router.get('/welcome', (req, res) => {
    res.send("WELCOME to follow up");
});
router.post('/create-user', userController.createUser);
router.post('/login', userController.login);
router.get('/gaurded', passport.authenticate('jwt', {session: false}), userController.protectedRoute);

module.exports = router;