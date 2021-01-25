const express = require('express')
require('./db/mongodb')
const User = require('./models/user')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        console.log('success')
        res.send(user)
    }).catch((e) => {
        console.log('error: ', e)
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('server is running on port ' + port)
})