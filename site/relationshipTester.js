const models = require('./models');
const {User} = require('./models');
const {Biodata} = require('./models');
const {Historical} = require('./models');
const user = require('./models/user');


// User.create({
//   username: "testuser3",
//   password: "testpass4",
//   previledge: "admin",    
// })
// .then((newUser) => {
//   // The get() function allows you to recover only the DataValues of the object
//   console.log(newUser.get())
// })
// .catch((err) => {
//   console.log("Error while company creation : ", err)
// })

// Biodata.create({
//     user_id:1,
//     nama_lengkap: "nama_lengkap4",
//     email: "user4@gmail.com",
//     alamat: "jakarta"
//   })

  // .then((newBiodata) => {
  //   // The get() function allows you to recover only the DataValues of the object
  //   console.log(newBiodata.get())
  // })
  // .catch((err) => {
  //   console.log("Error while company creation : ", err)
  // })

// Historical.create({
//     nama_game: "suit",
//     user_id: "1",
//     hasil: "draw",
//   })
//   .then((newHistorical) => {
//     // The get() function allows you to recover only the DataValues of the object
//     console.log(newHistorical.get())
//   })
//   .catch((err) => {
//     console.log("Error while company creation : ", err)
//   })



// // 1:1
// Get the biodata linked to a given User
User.findOne({
    where: {id: 6},
    
  })
  .then((findedBiodata) => {
    // Get the User with Company datas included
    console.log(findedBiodata)
    // Get the company record only
    // console.log(findedUser.company)
  })
  .catch((err) => {
    console.log("Error while find user : ", err)
  })

// 1:N
// Get the employees for a given company
// Historical.findByPk(1, {include: 'results'})
// .then((results) => {
//   // Get the Company with Users (employes) datas included
//   console.log(results)
//   // Get the Users (employes) records only
//   // console.log(company.get().employes)
// })
// .catch((err) => {
//   console.log("Error while find company : ", err)
// })
