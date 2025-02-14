const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const {User} = require('./models/User')
const bodyParser = require('body-parser')
const config = require('./config/key')


app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

console.log('서버 시작');

console.log('MongoDB 연결 시도...');
//mongodb+srv://yangsikwan:abcd1234@cluster0.c5scg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0 몽고디비 확실키
mongoose.connect('mongodb+srv://yangsikwan:abcd1234@cluster0.c5scg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0     ',{
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
    res.send('Hello World ㅎㅇㅇnodemon add');
});


app.post('/register', (req, res) => {
    //회원가입시 필요한 정보들 클라이언트에서 받아오기
    //그것들을 데이터베이스에 넣어준다

    const user = new User(req.body)


    user.save()
        .then(userInfo => {
            res.status(200).json({
                success: true
            })
        })
        .catch(err => {
            res.json({ success: false, err })
        })

})


app.listen(port, () => {
    console.log(`서버가 포트 ${port}에서 실행 중입니다.`);
});

