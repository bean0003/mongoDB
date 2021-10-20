const events = require('events');
// 이벤트 관련 메소드를 사용할 수 있는 EventEmitter 객체를 만듭니다.
const eventEmitter = new events.EventEmitter();

const connectHandler = function connected() {   
    console.log('연결 성공!');
    eventEmitter.emit('data_received'); 
}

// connection 이벤트와 connectHandler 핸들러와 연결
eventEmitter.on('connection', connectHandler);

// data_receive 이벤트와 익명함수와 연결
eventEmitter.on('data_received', () => {   
    console.log('데이터 수신!');
});

eventEmitter.emit('connection');   
console.log('프로그램을 종료합니다.');
