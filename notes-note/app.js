console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js')

// console.log(_.isString(true));
// console.log(_.isString("KoKo"));
var fileredArray = _.uniq(['koko',1,'koko',1,2,3,4])
console.log();

// console.log('Result : ',notes.add(9,-2));

// var user = os.userInfo();
// // console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are %${notes.age}.`);
