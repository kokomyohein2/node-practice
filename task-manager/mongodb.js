const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     name: 'Andrew',
    //     age: 27
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user');
    //     }
    //
    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'KoKo',
    //         age: 25
    //     },
    //     {
    //         name: 'nge',
    //         age: 24
    //     },
    //     {
    //         name: 'booboo',
    //         age: 5
    //     }], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert users');
    //     }
    //
    //     console.log(result.ops);
    // });

    db.collection('tasks').insertMany([
        {
            description: 'Clean the house',
            completed: true
        },{
            description: 'Renew inspection',
            completed: false
        },{
            description: 'Pot plants',
            completed: false
        }
        ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks');
        }

        console.log(result.ops);
    });

})