const express= require('express')
const app = express();
const port = 3020;
const router = require('./router')

app.set('view engine', 'ejs')
app.use(router)

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.listen(port, ()=>{
    console.log('test')
})