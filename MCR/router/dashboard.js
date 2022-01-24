const router = require('express').Router()
const {dashboard} = require('../controllers')
const layoutName = (req,res,next) => {
    // res.locals.layout = `layout/${layoutName}`
    // next()
}

// router.use(layoutName('dashboard'))
router.get('/', dashboard)
router.get('/post',dashboard)

module.exports = router