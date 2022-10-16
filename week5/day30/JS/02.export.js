// let count = 0;

function increase() {
  count++;
}

function getCount() {
  return count;
}


// 전역에서의 this는 module.exports를 가리킨다.
console.log(this === module.exports)
this.getCount = getCount;
this.increase = increase;
this.count = 0;

console.log(module.exports)

// module.exports.count = count;
// module.exports.getCount = getCount;
// module.exports.increase = increase;

// console.log(module.exports)


// module.exports.count = count;
// module.exports.getCount = getCount;
// module.exports.increase = increase;
// console.log(module.exports === exports);

// exports = {};
// console.log(module.exports === exports);
//exports.increase = increase;
// console.log(module);