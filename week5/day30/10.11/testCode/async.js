let fs = require("fs").promises;

// 비동기 메서드
console.log("start async");
fs.readFile("./test.txt")
    .then((data) => {
        console.log("1:", data.toString());
    })
    .catch((e) => {
        console.log(e);
    });

fs.readFile("./test.txt")
    .then((data) => {
        console.log("2:", data.toString());
    })
    .catch((e) => {
        console.log(e);
    });

fs.readFile("./test.txt")
    .then((data) => {
        console.log("3:", data.toString());
    })
    .catch((e) => {
        console.log(e);
    });

fs.readFile("./test.txt")
    .then((data) => {
        console.log("4:", data.toString());
    })
    .catch((e) => {
        console.log(e);
    });

fs.readFile("./test.txt")
    .then((data) => {
        console.log("5:", data.toString());
    })
    .catch((e) => {
        console.log(e);
    });

console.log("end");
