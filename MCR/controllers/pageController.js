const { User } = require('../models')

module.exports = {
    home : (req, res) => {
        res.render("index")
    },

    login : (req,res) =>{
        res.render('login')
    },

    logout :(req, res) => {
        res.render('index')
    },

    register :(req, res) => {
        res.render('register')
    },

    gamesuit :(req, res) => {
        res.render('game-suitan')
    },

    gamesuit2 :(req, res) => {
        res.render('game-suitan2')
    },

    loginarea :(req, res) => {
        res.render('loginarea')
    },

    dashboard :(req, res) => {
        User.findAll()
        .then(users => {
        res.render('dashboard', {
        users
        })
        })
        
    },

      
    delete : (req, res) => {
        User.destroy({
            where: { id: req.params.id }
            })
            .then(user => {
                res.redirect('/dashboard')
            })
    },
    
    edit:  (req, res) => {
        User.findOne({
        where: { id: req.params.id }
        })
        .then(user => {
        // res.status(200).json(user)
        res.render('edit', {
            user
            })
        })
    },

    update:  (req, res) => {
        User.update({
        username: req.body.username,
        password: req.body.password,
        role: req.body.role
        }, {
        where: { id: req.params.id }
        })
        .then(user => {
            res.redirect('/dashboard')
        })
    },
    
    single :(req,res)=>{
        res.redirect('/gamesuit')
    },

    multi :(req,res)=>{
        res.redirect('/gamesuit2')
    }
    
}
