const yargs = require('yargs');

const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

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

geocode.geocodeAddress(argv.a, argv.key, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

weather.getWeather(13.75398, 100.50144, argv.wKey, (errorMessage, weatherResult) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(`It's currently ${weatherResult.temperature}. It feels like ${weatherResult.apparentTemperature}.`)
        // console.log(JSON.stringify(weatherResult, undefined, 2));
    }
});