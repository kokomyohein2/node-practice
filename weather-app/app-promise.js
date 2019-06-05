const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        },
        gKey: {
            demand: true,
            alias: 'googleApiKey',
            describe: 'Google Maps API key',
            string: true
        },
        wKey: {
            demand: true,
            alias: 'weatherApiKey',
            describe: 'Forecast IO API key',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${argv.googleApiKey}&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }
    var lat = '13.75398';
    var lng = '100.50144';
    var weatherUrl = `https://api.darksky.net/forecast/${argv.weatherApiKey}/${lat},${lng}?units=si`;
    console.log(weatherUrl)
    console.log(response.data);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`Its' currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers.');
    }
    console.log(e);
})