const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')

console.log('서버 시작');

console.log('MongoDB 연결 시도...');

mongoose.connect('mongodb+srv://yangsikwan:abcd1234@cluster0.c5scg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
}).then(()=>{
    console.log('MongoDB 연결 성공')
}).catch((err)=>{
    console.error('MongoDB 연결 실패:', err)
})


app.get('/', (req, res) => {
    res.send('Hello World ㅎㅇㅇ');
});

app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});

