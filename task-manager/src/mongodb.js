const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true //for future support
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        }
    }
})

const me = new User({
    name: '    Andrew    ',
    email: 'MIKE@ME.IO    '
})

me.save().then(() => {
    console.log(me)
}).catch(e => {
    console.log('Error!', e)
})

// const Task = mongoose.model('Task', {
//     description: {
//         type: String
//     },
//     completed: {
//         type: Boolean
//     }
// })
//
// const task = new Task({
//     description: 'shower booboo',
//     completed: false
// })
//
//
// task.save().then(() => {
//     console.log(task)
// }).catch(e => {
//     console.log('Error!', e)
// })