// const yargs = require('yargs');

// const geocode = require('./geocode/geocode')
// const argv = yargs
//     .options({
//         a: {
//             demand: true,
//             alias: 'address',
//             describe: 'Address to fetch weather for',
//             string: true
//         },
//         key: {
//             demand: true,
//             alias: 'apiKey',
//             describe: 'Google Maps API key',
//             string: true
//         }
//     })
//     .help()
//     .alias('help', 'h')
//     .argv;

// geocode.geocodeAddress(argv.a, argv.key, (errorMessage, results) => {
// if(errorMessage){
//     console.log(errorMessage);
// }else{
//     console.log(JSON.stringify(results,undefined,2));
// }
// });

// 391f89f9e2cdf219fa000e239f873286
// https://api.darksky.net/forecast/391f89f9e2cdf219fa000e239f873286/37.8267,-122.4233

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/391f89f9e2cdf219fa000e239f873286/13.75398,100.50144?units=si',
    json: true
}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather.');
        console.log(error);
    }
});