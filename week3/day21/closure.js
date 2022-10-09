// scope, 비동기 다 복합된 문제 -> closure



function a() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i)
    }, i * 1000)
  }
}


a();

// 해결법 -> IIFE로 closure 생성, 혹은 let 사용

function b() {
  for (var i = 0; i < 5; i++) {
    (function (j) {
      // var j = i;
      setTimeout(() => {
        console.log(j)
      }, i * 1000)
    })(i)
  }
}

// closure : 함수와 외부 변수(외부 환경)과의 관계