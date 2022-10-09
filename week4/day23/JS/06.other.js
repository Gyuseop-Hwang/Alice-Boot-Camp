// 논리 연산자  단축 평가

let done = true;
let message = '';

// 조건식
if (done) message = '값';
// 논리연산 단축평가
message = done && '값';

let object = null;
//let value = object.value;

let val = object && object.value;
console.log(val);

// function getLength1(str) {
// 	return str.length;
// }

// getLength1();

// function getLength2(str) {
// 	str = str || '';
// 	return str.length;
// }
// console.log(getLength2());

function printMsg1(msg) {
  msg = msg || '기본값';
  console.log(msg);
}
console.log('==============');
printMsg1(undefined);
printMsg1(null);
printMsg1(0);
printMsg1(100);
printMsg1('메세지');
printMsg1();
printMsg1('');

function printMsg2(msg) {
  msg = msg ?? '기본값';
  console.log(msg);
}

console.log('==============');
printMsg2(undefined);
printMsg2(null);
printMsg2(0);
printMsg2(100);
printMsg2('메세지');
printMsg2();
printMsg2('');

//?. = 옵셔널 체이닝(optional chaining) 연산자

// 💡 논리곱(&&) 연산자
console.log('==============');
let str = '';
let length = str && str.length;
console.log(length); // ''
// 옵셔널 체이닝 연산자
str = '';
length = str?.length;
console.log(length); // 0

let item = { price: 1 };
const price = item?.price;

console.log(price);

let dog = { name: '바둑이', owner: { name: '연미' } };

function printOwner(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printOwner(dog);
printOwner();

// 널병합 연산자
console.log('==============');

let num = 0;
console.log(num || '-1'); // -1
console.log(num ?? '-1'); // 0
console.log(num ?? '1'); //0
console.log(num ?? '2'); //0
console.log(null || '3'); // 3
console.log('' || '4'); // 4
console.log(null ?? '5'); //5
console.log('' ?? '6'); // ''
