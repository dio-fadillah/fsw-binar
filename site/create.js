const { User } = require('./models')
const { Profile } = require('./models')

// User.create({
//     username: 'Hello World5',
//     password: 'ini password5',
//     role:'user'
// })

Profile.create({
    userId: 8,
    nama_lengkap: 'nama_lengkap4',
    email: 'test4@gmail.com',
    alamat: 'jakarta'
})
    .then(user => {
    console.log(user)
})