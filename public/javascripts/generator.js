var request = require('request');

var joke = request('https://icanhazdadjoke.com/j/', (error, response, body) => {
var juokelis = body;
console.log(juokelis);

});