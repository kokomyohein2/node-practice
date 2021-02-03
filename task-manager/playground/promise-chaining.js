require('../src/db/mongoose')
const User = require('../src/models/user')

// 600a27e833743f78bdd22373
// 600a2a07fb6737794ecaa105
User.findByIdAndUpdate('600a2a07fb6737794ecaa105', {age: 1}).then((user) => {
    console.log(user)
    return User.countDocuments({age: 1})
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})