module.exports={
    home: (req,res) =>{
        const locals = {
            data: [{post:10, visitor:100, Reader:10}],
            contentName: 'Statistic',
            layout: 'layout/dashboard'

        }
        res.render('/dashboard/home', locals)
    },
    post: require('./post')
}