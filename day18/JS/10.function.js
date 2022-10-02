//ES5
const dog = {
  name: '바둑이',
  // 함수형 -> prototype 가짐. 생성자 함수로서 다시 기능할 수 있음.
  info: function () {
    console.log(`나는 ${this.name} 이야`);
  },
};
dog.info();
const obj = new dog.info();
console.log(obj);

//ES6
// const cat = {
//   name: '나비',
//   // 메소드 축약형 -> 일반함수 키워드 X -> prototype X -> constructor X
//   // 생성자 x -> 생성자 함수로서 다시 기능 X
//   // 메서드는 객체 안에 있는 함수(축약형이야말로 진정한 객체의 메소드라고 할 수 있다.)
//   info() {
//     console.log(`나는 ${this.name} 이야`);
//   },
// };
// cat.info();



function sum(a, b) {
  console.log('sum = ', arguments[0] + arguments[1]);
}
sum(1, 2);

// const add = (a, b) => {
//   console.log('add = ', arguments[0] + arguments[1]);
// };
// add(1, 2);




const cat = {
  name: '나비',
  info() {
    console.log(`나는 ${this.name} 이야`);
  },
};

cat.printThis = printThis;

const printThis = () => {
  console.log('this=', this);
};

function thisTest() {
  console.log(this)
}

printThis();

cat.printThis();
console.log(this)
thisTest();
