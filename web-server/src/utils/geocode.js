const request = require('request');

var geocodeAddress = (address, apiKey, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${apiKey}`,
        json: true
    }, (error, response, body) => {
        if (body.total_results === 0) {
            callback({
                error : 'Not Found'
            });
        } else if (body.status.message === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted,
                latitude: body.results[0].geometry.lat,
                longitude: body.results[0].geometry.lng
            })
        } else {
            callback(body.status);
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;