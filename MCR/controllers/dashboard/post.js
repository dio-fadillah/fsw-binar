const moment = require('moment')
const posts = [
    {id:1, title:'lorem ipsum', body:'dolor sit amet', createdAt: Date()},
    {id:2, title:'lorem 1', body: 'dolor1', createdAt:Date()}

]

module.exports ={
    index: (req,res) =>{
        // const locals = {
        //     data:{
        //         posts: posts.map(i=>{
        //             i.fromNow = moment(i.createdAt).fromNow()
        //             return i
        //         }),
        //     },
        //     contentName: 'Post'
        },
        
    }
}