const xyz = require('./people')
const { people, ages } = require('./people')

console.log(xyz)
// console.log(people) this will give an error because we cannot get direct access of people object without exporting that object from that file
console.log(xyz.people, xyz.ages)

console.log(people, ages)