




const calc = {};

calc.add = function (a, b) {
  return a + b;
};

exports.test = function () {
  console.log('test')
}

console.log("module.exports로 새 객체화 하기 전")
console.log("module.exports =", module.exports)
module.exports = calc;
console.log('--------------------------------------------------------')
console.log("module.exports 갱신 후 module.exports =")
console.log("module.exports =", module.exports)






