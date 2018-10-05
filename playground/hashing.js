const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = "123abc!";

//the longer the rounds the harder it is to decrypt. 10 is ok, but 100 is better, but takes longer to create.
/* bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log(hash);
    })
}); */

var hashedPassword = "$2a$10$YrHlsXBXdV/FJXk.Yj2C/OlLG7Aj65pvLkGtGv9zslM9VbFQV3z0e";

//see if stored password is the same as what the user enters.
bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
})

/* var data = {
    id: 4
};
//jwt.io
var token = jwt.sign(data, '123abc'); //secret
console.log('token', token);
var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
var message = 'I am user number 10';
var hash = SHA256(message).toString();

console.log(`Message: ${message}`);
console.log(`Hash: ${hash}`); 


var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'salting').toString()
}

//salting adds extra secrecy 

//test else statement below
//token.data.id = 5;
//token.hash = SHA256(JSON.stringify(token.data)).toString();

var resultHash = SHA256(JSON.stringify(token.data)+'salting').toString();

if(resultHash === token.hash) {
    console.log('Data was not changed');
}
else {
    console.log('Data was changed, don\'t trust');
}*/