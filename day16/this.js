
function normalFunc() {
  this.name = 'hi';

  return (
    {
      name: 'bye',
      print: function () {
        console.log(this.name);
      },
      ownPrint: function () {
        console.log(this)
      }
    }
  )
}

function arrowFunc() {
  this.name = 'hi'; // window.name = 'hi'
  // console.log(this)
  return (
    {
      name: 'bye',
      print: () => {
        console.log(this.name)
      },
      ownPrint: () => { // 부모의 this는 window(여기서는 node라서 global)
        console.log(this)
      }
    }
  )
}

const normal = normalFunc();
const arrow = arrowFunc();

normal.print();
arrow.print();
normal.ownPrint();
arrow.ownPrint();

function createObject() {
  this.myFunc = function () {
    console.log("myFunc this:", this);
    return function () { console.log("myFunc return this:", this) };
  };
}

const o = new createObject();
o.myFunc()();
// myFunc        this: createObject {...}
// myFunc return this: window {...}

/* 객체 리터럴 방식 */
// const o = {
//   myFunc: function () {
//     console.log("myFunc this:", this)
//     return function () { console.log("myFunc return this:", this) }
//   },
// };

// o.myFunc()();