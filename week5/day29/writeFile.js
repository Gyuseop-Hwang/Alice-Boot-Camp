












const fs = require('fs');

fs.writeFile('./test.txt', "writeFile로 내용 작성", 'utf-8', (err) => {
  console.log("write파일로 내용 작성 완료")
})

fs.writeFileSync('./test.txt', 'test', 'utf-8')