




const fs = require('fs');


fs.appendFile('test3.txt', "\n이제 정말 추가", 'utf-8', (err) => {
  console.log("추가 완료");
})
