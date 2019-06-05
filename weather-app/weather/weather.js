const request = require('request');

var getWeather = (lat, long, apiKey, callback) => {

    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}?units=si`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback("Unable to fetch weather");
        }
    });
};

module.exports.getWeather = getWeather;