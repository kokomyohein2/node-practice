const request = require('request');

var getWeather = (lat, long, apiKey, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${apiKey}/${lat},${long}?units=si`,
        //https://api.darksky.net/forecast/391f89f9e2cdf219fa000e239f873286/37.8267,-122.4233
        json: true
    }, (error, response, body) => {
    
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback(error);
        }
    });
};

module.exports.getWeather = getWeather;