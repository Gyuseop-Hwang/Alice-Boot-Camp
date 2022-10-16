const http = require("http");

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {
        "Set-Cookie": "mycookie=test",
        "Content-Type": "text/html; charset=utf-8",
    });
    res.write("<h1>쿠키는 브라우저에게 양보하세요</h1>");
    res.end();
}).listen(8080, () => {
    console.log("8080대기중");
});
