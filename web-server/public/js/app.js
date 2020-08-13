console.log('Client side JS file is loaded');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data);
    });
});

const weatherForm = document.querySelector('form');
const apiKeyMap = document.querySelector('#apiKeyMap');
const apiKeyWeather = document.querySelector('#apiKeyWeather');
const search = document.querySelector('#searchLocation');
const message1 = document.querySelector('#message-1');
const message2 = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    message1.textContent = 'Loading...';
    message2.textContent = '';

    fetch(`http://localhost:3000/weather?address=${search.value}&apiKeyMap=${apiKeyMap.value}&apiKeyWeather=${apiKeyWeather.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
            console.log('nameSpace '+data);
                message1.textContent = data;
            } else {
                message1.textContent = data.forecast;
                message2.textContent = data.address;
            }
        });
    });
});