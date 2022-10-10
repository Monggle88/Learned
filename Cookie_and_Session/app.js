const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
const router = express.Router();
// Session
let session = {};

// db 연결
mongoose.connect('mongodb://localhost/cookie-demo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// 미들웨어
app.use(cookieParser());

// API
// res.cookie()를 이용하여 쿠키 할당하기
app.get('/set-Cookie', (req, res, next) => {
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

    res.cookie('name', 'sparta', {
        expires: expires,
    });
    return res.status(200).end();
});

// Set-Cookie를 이용하여 쿠키 할당하기
// app.get('/set-Cookie', (req, res, next) => {
//     const expire = new Date();
//     expire.setMinutes(expire.getMinutes() + 60); // 만료 시간을 60분으로 설정합니다.

//     res.writeHead(200, {
//         'set-Cookie': `name=sparta; Expires=${expire.toGMTString()}; HttpOnly; Path=/`,
//     });
//     return res.status(200).end();
// });

// cookie-parser를 이용하여 쿠키 접근하기
app.get('/get-cookie', (req, res, next) => {
    const cookie = req.cookies;
    console.log(cookie); // { name: 'sparta' }
    return res.status(200).json({ cookie });
});

// req를 이용하여 쿠키 접근하기
// app.get('/get-cookie', (req, res, next) => {
//     const cookie = req.headers.cookie;
//     console.log(cookie); // name = sparta
//     return res.status(200).json({ cookie });
// });

// Session Key 할당하기
app.get('/set-session', (req, res, next) => {
    const name = 'sparta';
    const uniqueInt = Date.now();
    session[uniqueInt] = { name };

    res.cookie('sessionKey', uniqueInt);
    return res.status(200).end();
});

// Session 접근하기
app.get('/get-session', (req, res, next) => {
    const { sessionKey } = req.cookies;
    const name = session[sessionKey];
    return res.status(200).json({ name });
});

// --- 연습 문제 ---
// GET Method로 /set을 호출했을 때, nmae에 nodejs가 저장된 쿠키를 할당
app.get('/set-node', (req, res, next) => {
    const name = 'nodejs';
    const uniqueInt = Date.now();
    session[uniqueInt] = { name };

    res.cookie('sessionKey', uniqueInt);
    return res.status(200).end();
});

// GET Method로 /get을 호출했을 때, 쿠키에 등록된 정보들이 반환되는 API를 만들어주세요
app.get('/get-node', (req, res, next) => {
    const { sessionKey } = req.cookies;
    const name = session[sessionKey];
    return res.status(200).json({ name });
});

// server open
app.listen(3000, () => {
    console.log('서버가 켜졌어요!');
});
