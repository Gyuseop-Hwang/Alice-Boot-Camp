// 사용하는 곳은 같은 경로에 있는 ./ 해주면 같은 경로 라는 뜻 
// ../ 상위 폴더 라는 뜻 


const counter = require('./02.export.js');

console.log(module)
counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());
console.log(counter.count)
// console.log(counter.count)