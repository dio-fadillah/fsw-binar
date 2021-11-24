const { User } = require('./models')

User.destroy({
    where: {
    username: false
    }
    })
    .then(() => console.log("Artikel yang belum di approve sudah dihapus" )
)