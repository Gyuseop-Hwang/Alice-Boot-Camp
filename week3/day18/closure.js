function a() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}
// var는 함수 scope, i는 function a의 i이다. 
// a 스코프는 1개, for문 scope는 5개. Background로 이동한 setTimeout들은 큐로 이동하는데
// 호출 스택이 비면 큐에서 하나씩 빠져서 실행된다 이 때 console.log(i)의 i가 함수 a 스코프의 i를 찾는다.
// 각각의 for문 scope에는 i가 없으므로 그 다음 바깥껍질인 funcion a의 i를 찾는 것.
// 이 때, i = 5이다. 


function b() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}



// let은 block scope이므로, 각각의 for문 다섯 개 스코프에서 i = 0, 1, 2, 3, 4가 된다. 마지막에 최종적으로 i가 5가 되기는 함.
// console.log(i)의 i는 각각의 for문 block scope내에서 i를 찾고 i는 각각 0, 1, 2, 3, 4이다.

function c() {
  for (var i = 0; i < 5; i++) {
    ((j) => {
      setTimeout(() => {
        console.log(j)
      }, i * 1000)
    })(i)
  }
  // for (var i = 0; i < 5; i++) {
  //     (function (j) {
  //         setTimeout(() => {
  //             console.log(j)
  //         }, i * 1000)
  //     })(i)
  // }
}

// clousre -> 함수가 실행 당시의 context를 기억한다.
// 외부 변수가 어떤 함수에 close되어있다. -> 외부변수가 함수 내부에서 갇힌다.
// setTimeout을 감싼 익명함수 내부에 i변수가 close된다. -> 익명함수는 closure이다.

function add(num1) {
  return function sum(num2) {
    return num1 + num2;
  }
}

const addOne = add(1);

const addTwo = add(2);

console.log(addOne(1)); // num1이 close됬다. closer함수
console.log(addTwo(1));