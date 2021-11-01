const express = require('express')
const router = express.Router()

router.use(express.static('public'));
router.get('/', (req,res) =>{
    res.render('index')
});

router.get('/game-suitan', (req,res) =>{
    res.render('game-suitan')
});


router.get('/login', (req,res) =>{
    res.render('login')
});

router.get('/protected', (req,res) =>{
    res.render('protected')
});

router.get('/unprotected', (req,res) =>{
    res.render('unprotected')
});


// //error not found 404
// router.use((req,res)=>{
//     res.status(404).render('index')
// })

module.exports = router;