














const fs = require('fs');


try {
  const data = fs.readFileSync('./test4.txt', 'utf-8');
  console.log("readFileSync로 읽었습니다", data)
}
catch (err) {
  console.log(err);
  console.log('file을 읽지 못 했습니다.')
}
finally {
  console.log('코드 실행을 마쳤습니다.')
}







// fs.readFile('./test4.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//     console.log('file을 읽지 못 했습니다.')
//     return;
//   }
//   console.log("readFile로 읽었습니다.", data)
// })



// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log("readFileSync로 읽었습니다", data)
// console.log('---------동기 vs 비동기------------')