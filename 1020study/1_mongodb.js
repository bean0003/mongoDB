const express = require('express');//웹 서버의 기능을 가지고있는 모듈 세팅
const bodyParser = require('body-parser');//post 방식
//npm i mongodb
const MongoClient = require('mongodb').MongoClient;

const app = express();//서버의 기능인 express()을 app 이라는 대상으로 객체화
const router = express.Router();//하나의 앱으로 객체화

const port = 3000;

app.use(bodyParser.urlencoded({extended: false}));

let database; //몽고디비 연결 객체 // 몽고디비데이터를 저장해주주는 변수

// mongodb 연결 함수
function connectDB(){
    const databaseURL = "mongodb://localhost:27017";
    //MongoClient.connect(databaseURl); 단순히 데이터베이스 연결
    MongoClient.connect(databaseURL, (err, db) => {
        if(!err){
            const tempdb = db.db('kkk');// 접근하고자 하는 데이터베이스
            database = tempdb;
            console.log('mongodb 데이터베이스 연결 성공!');
        }else{
            console.log(err);
        }
    });
}

app.use("/", router);

app.listen(port, () => {// 클라이언트 대기중에 보여줄 메세지
    console.log(`${port}포트로 서버 동작중...`);
    connectDB();//함수호출 즉 실행
});

// 회원가입
// http://localhost:3000/member/regist (post)
router.route('/member/regist').post((req, res) => {
    console.log('/member/regist 호출!');
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    const name = req.body.name;
    const age = req.body.age;

    console.log(`userid:${userid}, userpw:${userpw}, name:${name}, age:${age}`);


    }
);
