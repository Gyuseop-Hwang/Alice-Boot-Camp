const fs = require("fs");

// 파일 읽기
// 주의할 점 : 파일의 경로가 node 명령이 실행하는 콘솔 기준입니다.
fs.readFile("./test.txt", (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Callback fs");
    console.log(data);
    console.log(data.toString());
});

// <Buffer 74 65 73 74 20 74 65 78 74>
// test text

console.log(process.cwd()); // 실행 경로 찾기

const fsP = fs.promises;

fsP.readFile("./test.txt")
    .then((data) => {
        console.log("Promise fs");
        console.log(data);
        console.log(data.toString());
    })
    .catch((e) => {
        console.log(e);
    });

//  파일 만들기
fsP.writeFile("./write.txt", "내가 만들 파일에 들어갈 내용") // 경로, 내용
    .then(() => fsP.readFile("./write.txt"))
    .then((data) => {
        console.log(data.toString());
    })
    .catch((e) => {
        console.log(e);
    });
