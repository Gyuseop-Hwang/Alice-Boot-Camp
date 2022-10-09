const o = {
  name: "Kim",
  changeMyName: function (name) { this.name = name },
  test: function () {
    console.log(this)
  }
};

const o2 = {
  name: "Song",
};

function callFuncWithArg(f, arg) {
  f(arg);
}

o.changeMyName.bind(o2)("Sam");
console.log("1번 - ", o2.name);

callFuncWithArg(o.changeMyName, "Daniel");
console.log("2번 - ", o.name);

//  그대로 kim이 찍히는 이유
// o.changeMyName 메소드의 함수 내용이 전달되어서 다음처럼 실행된다.
// function(name){
//   this.name = name
// }
// 여기에 "Daniel"이 들어오는데, callFuncWithArg에서 받은 함수를 실행할 때 f(arg)를 보면 this를 바꿔주는 작업
// bind, 화살표함수, new 연산자 등이 아무것도 없다 그러면 this는 window(global)이고 지금 window.name = 'Daniel'을 해준 것이다.
// 그러므로 기존 객체는 이름이 변하지 않았다.

o.changeMyName("Sam");
console.log("3번 - ", o.name);

setTimeout(o.test, 1000)