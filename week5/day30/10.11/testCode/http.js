// //모듈을 추출합니다.
let http = require("http");

//server 객체를 생성합니다.
let server = http.createServer();

//server 객체에 이벤트를 연결합니다.
server.on("request", function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
    res.write("Hello elice");
    console.log("Request On");
    res.end("<h1>엘리스 안녕</h1>");
});
server.on("connection", function () {
    console.log("Connection On");
});
server.on("close", function () {
    console.log("Close On");
});

//listen() 메서드를 실행합니다.
server.listen(8080, () => {
    console.log("8080포트 대기 중");
});

setTimeout(function () {
    server.close();
}, 3000);

// // request 이벤트 축약
// let http2 = require("http");
// http2
//     .createServer((req, res) => {
//         res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//         res.write("Hello elice~!");
//         res.write("<br/>");
//         res.write("Hello elice~!2");
//         res.end("<h1>엘리스 안녕</h1>");
//     })
//     .listen(8080);
