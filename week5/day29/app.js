











const { add, subtract, multiply, divide } = require("./calc");
console.log(add, subtract, multiply, divide)

console.log(add(4, 2))
console.log(subtract(4, 2))
console.log(multiply(4, 2))
console.log(divide(4, 2))



// const calc2 = require('./calc2')

// require()는 exports 객체를 반환한다.
// console.log(calc2)
//require()함수의 반환값은 exports 객체이고 calc2 변수는 exports 객체처럼 사용할 수 있습니다.


// console.log(calc.divide(15, 5));
// console.log(calc2.multiply(calc2.add(1, 2), calc2.add(2, 3))); // 15
// console.log(calc2.add(3, 5));

// calc2.test();