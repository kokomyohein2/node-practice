// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const MongoObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id.id.length);
console.log(id.toHexString().length);
console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Vikram',
    //     age: 26
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

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },{
    //         description: 'Renew inspection',
    //         completed: false
    //     },{
    //         description: 'Pot plants',
    //         completed: false
    //     }
    //     ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks');
    //     }
    //
    //     console.log(result.ops);
    // });

    // db.collection('users').findOne({_id: new ObjectID('5ffbb1d6d7f4d007ea58abac')}, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 27}).toArray( (error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(users)
    // })

    // db.collection('users').find({ age: 27}).count( (error, count) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }
    //     console.log(count)
    // })

    db.collection('tasks').find({completed: false}).toArray((error, task) => {
        console.log(task)
        // task.map(((t,index) =>console.log(`task number ${index+1} is ${t}`)))
    })
})