module.exports ={
    home: (req,res) => res.render("default/home"),
    notFound: (req,res) => res.render("default/not-found"),
    exception: (req,res) => res.render("default/exception")
}