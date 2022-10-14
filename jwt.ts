import { buffer } from "stream/consumers";

const header = {
    alg: 'HS256', //PADRAO Hmac + sha256
    typ: 'JWT'
};

const payload = {
    username: 'joaopedro1@user.com',
    name: 'Joao Pedro',
    exp: new Date().getTime(), //timestamp //expiracao

};



/// header + payload + key

const headerEncoded = Buffer.from(JSON.stringify(header)).toString('base64');
const payloadEncoded = Buffer.from(JSON.stringify(payload)).toString('base64');

const key = 'abcd123456';

const crypt = require('crypto');

const signature = crypt
.createHmac('sha256', key)
.update(`${headerEncoded}.${payloadEncoded}`)
.digest('bin')

const base64Url = require('base64url')

console.log( `${headerEncoded}.${payloadEncoded}.${base64Url(signature)}`);


// console.log(headerEncoded, payloadEncoded);


// console.log(signature);




