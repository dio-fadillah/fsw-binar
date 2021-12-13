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

    login: passport.authenticate('local', {
        successRedirect: '/loginarea',
        failureRedirect: '/login',
        failureFlash: true // Untuk mengaktifkan express flash
    }),

    gamesuit: (req, res) => {
        res.render('game-suitan', req.user.dataValues)
        
    },

    gamesuit2: (req, res) => {
        res.render('game-suitan2', req.user.dataValues)
        
    }

        

};