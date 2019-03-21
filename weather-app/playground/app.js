const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        },
        key: {
            demand: true,
            alias: 'API Key',
            describe: 'Google Maps API key',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var apiKey = argv.key;

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log("Unable to connect");
    } else if (body.status === 'OK') {
        console.log(`Address: ${body.result[0].formatted_address}`);
        console.log(`Latitude: ${body.result[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.result[0].geometry.location.lng}`);
    } else {
        console.log(body.status);
    }
});