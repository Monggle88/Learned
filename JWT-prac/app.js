// lib import
const jwt = require('jsonwebtoken');

// 데이터 암호화
const token = jwt.sign({ myPayloadData: 1234 }, 'mysecretkey');
console.log(token);
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJteVBheWxvYWREYXRhIjoxMjM0LCJpYXQiOjE2NjUzNzg4Nzl9.XOpU2RUgseiYmOQfBMDHG197fB9wDrAZIk1V1w92Rv4

// 데이터 복호화
const decodeValue = jwt.decode(token);
console.log(decodeValue); // { myPayloadData: 1234, iat: 1665383431 }

// 데이터 검증
const decodeValue_ver = jwt.verify(token, 'mysecretkey');
console.log(decodeValue_ver); // { myPayloadData: 1234, iat: 1665383431 }
