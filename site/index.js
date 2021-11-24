const express= require('express')
const app = express();
const port = 3020;
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

app.post('/signup', (req, res) => {
    User.create({
    username: "user2",
    password: 12345
    })

})

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
        res.redirect('/berita')
    }else{
        res.redirect("/unprotected")
    }
})

app.post('/subscribe',(req,res)=>{
    const {email} = req.body;
    res.json(email);
})


app.get('/berita', (req, res) => {
    User.findAll()
    .then(users => {
    res.render('dashboard', {
    users
    })
    })
})

app.get('/edit', (req, res) => {
    User.findAll()
    .then(users => {
    res.render('edit', {
    users
    })
    })
})

app.listen(port, ()=>{
    // console.log('jalan servernya')
})