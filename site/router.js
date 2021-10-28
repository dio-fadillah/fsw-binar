const express = require('express')
const router = express.Router()

router.use(express.static('public'));
router.get('/', (req,res) =>{
    res.render('index')
});

router.get('/game-suitan', (req,res) =>{
    res.render('game-suitan')
});

//error not found 404
router.use((req,res)=>{
    res.status(404).render('index')
})

module.exports = router;