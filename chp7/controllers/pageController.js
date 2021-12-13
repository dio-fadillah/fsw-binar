const { Article } = require('../models')

module.exports = {
    home : (req, res) => {
    const title = "Hello World",
    subTitle = "Welcome to the world!";
    res.render("index", { title, subTitle });
    },

    about : (req,res) =>{

    res.render('about',{title: "testing About"})

    },

    articles :(req, res) => {
        Article.findAll().then(articles => {
        res.render("articles", { title: "Articles", articles })
    });
    }
}