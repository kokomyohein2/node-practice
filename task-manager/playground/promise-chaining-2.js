require('../src/db/mongoose')
const Task = require('../src/models/task')

// 600a3227ffc5117aa2aae021
// 600e17b76aab094051e652c2

Task.findByIdAndDelete('600a3227ffc5117aa2aae021').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) => {
    console.log(result)
}).catch(e => {
    console.log(e)
})