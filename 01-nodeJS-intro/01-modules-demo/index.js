

const {data,add,multiply} = require('./util.js');
const fs = require('fs');


console.log(add(2,3));
console.log(multiply(2,3));
console.log(data);

const url = new URL('http://localhost:3000/catalog?page=7&arg01=200&arg03=500');
console.log(url);








