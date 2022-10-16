// 동기 메서드
const fs_sync = require("fs");

console.log("start sync");
let data = fs_sync.readFileSync("./test.txt");
console.log("1: ", data.toString());

data = fs_sync.readFileSync("./test.txt");
console.log("2: ", data.toString());

data = fs_sync.readFileSync("./test.txt");
console.log("3: ", data.toString());

data = fs_sync.readFileSync("./test.txt");
console.log("4: ", data.toString());

data = fs_sync.readFileSync("./test.txt");
console.log("5: ", data.toString());

console.log("end");
