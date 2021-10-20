// node.js의 기본파일 구조

const http = require('http');

const hostname = '127.0.0.1';//메인 주소
const port = 3000;//각각 기능을 확인하는 서브주소

const server = http.createServer((req, res) => {//서버가 원하는 정보/ 클라이언트가 원하는 정보
    res.statusCode = 200;//클라이언트가 정상적으로 값을 받을 수 있는 상태
    res.setHeader('Content-Type', 'text/plain');//클라이언트가 받을 파일 정보
    res.end('Hello World');//클라이언트가 받을 결과물
});

server.listen(port, hostname, () => {//서버가 되돌려주는 값에대한 메세지 표시
    console.log(`Server running at http://${hostname}:${port}/`);
});