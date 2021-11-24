const express= require('express')
const app = express();
const port = 3030;
const router = require('./router')
const { User } = require('./models')
const { Profile } = require('./models');
// const user = require('./models/user');

app.set('view engine', 'ejs')
app.use(router)

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/signup', (req,res) =>{
    res.render('signup')
});

app.get('/create', (req,res) =>{
    res.render('create')
});


const users = [
    {
        username: 'Hello World1',
        password : 123456,
    }
]

app.post('/login',(req,res)=>{
    
    const {username, password} = req.body;
    let Email = users.find(user => user.username === username)
    let Password = users.find(user => user.password === password)
    console.log(Email)
    if (Email){
        res.redirect('/dashboard')
    }else{
        res.redirect('/unprotected')
    }
})

app.get('/dashboard', (req, res) => {
    User.findAll()
    .then(users => {
    res.render('dashboard', {
    users
    })
    })
})

app.get('/unprotected', (req,res) =>{
    res.render('unprotected')
});

app.post('/subscribe',(req,res)=>{
    const {email} = req.body;
    res.json(email);
})


app.post('/create', (req, res) => {
    User.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
    })

    .then(user => {
        res.redirect('/dashboard')
    })
   
})



app.post('/update/:id', (req, res) => {
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
})

app.get('/delete/:id', (req, res) => {
    User.destroy({
        where: { id: req.params.id }
        })
        .then(user => {
            res.redirect('/dashboard')
        })
})


app.get('/update/:id', (req, res) => {
    User.findOne({
    where: { id: req.params.id }
    })
    .then(user => {
    // res.status(200).json(user)
    res.redirect('/dashboard')
    })
})

app.get('/edit/:id', (req, res) => {
    User.findOne({
    where: { id: req.params.id }
    })
    .then(user => {
    // res.status(200).json(user)
    res.render('edit', {
        user
        })
    })
})



app.listen(port, ()=>{
    // console.log('jalan servernya')
})