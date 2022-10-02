function varfor() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    })
  }
}
// setTimeout 함수 또한 closure다. 모든 자바스크립트 함수는 실행 당시의 주변 상황을 기억한다.
// 그리고 그 실행 컨텍스트의 최신 적용에 따라 수행한다. var i는 함수 스코프이므로 varfor 함수 내의
// 변수가 되고, varfor 함수 내에서 최종적으로 3이라는 값이 된다.

function letfor() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    })
  }
}
// let은 block scope로 각각 i = 1, 2, 3의 변수가 각각 다른 scope내에 존재한다.
// setTimeout의 i는 각각의 i = 1, 2, 3

varfor();

letfor();