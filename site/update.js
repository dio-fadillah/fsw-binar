const { User } = require('./models')

const query = {
where: { id: 1 }
}
User.update({
username: 'helow pak !'
}, query)
.then(() => {
console.log("Artikel berhasil diupdate")
process.exit()
})
.catch(err => {
console.error("Gagal mengupdate artikel!")
})