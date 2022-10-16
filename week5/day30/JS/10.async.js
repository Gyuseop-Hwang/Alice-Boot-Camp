
const fs = require('fs');
// const path = require('path');

// fs.rename(path.join(__dirname, 'test.txt'), path.join(__dirname, 'test222.txt'), (error) => {
//   error ? console.log(error) : console.log('이름 변경 완료');
// });

// fs.renameSync('./05week1/test222.txt', './05week1/test.txt');
console.log('====출력1===');

fs.rename('./test.txt', './test222.txt', (err) => {
  if (err) {
    console.log(err)
    return;
  }
  console.log('이름변경 완료')
})

fs.promises
  .rename('./test.txt', './test222.txt')
  .then(() => console.log('이름 변경 완료'))
  .catch((console.log))

console.log('====출력2===');
