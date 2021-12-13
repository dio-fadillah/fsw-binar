// controllers/authController.js
const { User } = require('../models' )
const passport = require('../lib/passport' )
module.exports = {
    register : (req, res, next) => {
    // Kita panggil static method register yang sudah kita buat tadi
    User.register (req.body)
    .then(() => {
    res.redirect ('/login' )
    })
    .catch(err => next(err))
    },

    whoami: (req, res) => {
        /* req.user adalah instance dari User Model, hasil autentikasi dari passport. */
        res.render('whoami', req.user.dataValues)
    }


}

