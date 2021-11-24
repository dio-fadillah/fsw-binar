// const {Article} = require('./models')

// Article.create({
//     title:'hello world',
//     body:'hi ini body',
//     approved:true
// }).then(article => {
//     console.log(article)
// })

const { Article } = require('../../orm/models')
Article.create({
title: 'Hello World',
body: 'Lorem Ipsum Dolor Sit Amet',
approved: true
})
.then(article => {
console.log(article)
})