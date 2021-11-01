const express= require('express')
const app = express();
const port = 3030;
const router = require('./router')

app.set('view engine', 'ejs')
app.use(router)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const users = [
    {
        email: 'test@gmail.com',
        password : '123',
    }
]


app.post('/login',(req,res)=>{
    
    const {email, password} = req.body;
    let Email = users.find(user => user.email === email)
    let Password = users.find(user => user.password === password)
    console.log(Email)
    if (Email){
        res.redirect('/protected')
    }else{
        res.redirect("/unprotected")
    }
})


app.listen(port, ()=>{
    console.log('jalan servernya')
})