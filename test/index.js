// const fs = require("fs");
// const option = { encoding: "utf-8" };
// const callback = (err, data) => {
// console.log("Aku muncul kedua");
// if (err) return console.error("Error:", err.message);
// console.log("Isi File:", data);
// };
// fs.readFile("async.txt", option, callback);
// console.log("Aku muncul pertama");

const fs = require("fs")
const option = { encoding: "utf-8" }
console.log("Aku muncul pertama")
const data = fs.readFileSync("async.txt", option)
console.log("Isi File:", data)
console.log("Aku muncul ketiga")