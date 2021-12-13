// routes/pages.js
const router = require("express").Router();
const page = require("../controllers/pageController");
const auth = require('../controllers/authController' );
const passport = require('../lib/passport' )


router.get("/", page.home);

router.get("/about", page.about);
router.get("/articles", page.articles);

router.get('/register' , (req, res) => res.render('register' ))
router.post('/register' , auth.register )

router.get('/login', (req, res) => res.render('login'))

router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))


const restrict = require('../middlewares/restrict')
router.get('/', restrict, (req, res) => res.render('index'))

router.get('/whoami', restrict, auth.whoami)

module.exports = router;