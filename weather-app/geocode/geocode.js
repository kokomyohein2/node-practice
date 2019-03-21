const request = require('request');

var geocodeAddress = (address, apiKey, callback) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback("Unable to connect");
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.result[0].formatted_address,
                latitude: body.result[0].geometry.location.lat,
                longitude: body.result[0].geometry.location.lng
            })
        } else {
            callback(body.status);
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;