// case1
function myFn() {
  return console.log(this);
}
myFn();
console.log("=".repeat(60));

// case2
const fn = {
  title: "Hello World!",
  tags: [1, 2, 3, 4],
  func() {
    console.log(this.title);
  },
  funcThis: {
    title: "Hello elice",
    func() {
      return console.log(this.title);
    },
    arrFunc: () => {
      console.log(this.title);
      console.log(this)
    },
  },
};
fn.func();
fn.funcThis.func();
fn.funcThis.arrFunc();

console.log("=".repeat(60));
