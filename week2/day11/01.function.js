
let myAge = 30;
function setMyAge(age) {
  return (age += 5);
}

//console.log('함수 호출전', myAge);
//console.log('setMyAge = ', setMyAge(myAge));
//console.log('함수 호출후', myAge);


function showName(obj) {
  obj.name = '황재성';
  console.log(obj);
}

const member = { name: '박연미' };
//console.log(member);
showName(member);
//console.log(member); 

member.name = '박연미';

//freeze : 속성 변경을 맊음 
const cat = { name: '나비' };
Object.freeze(cat);
cat.age = 3;
cat.name = '냐옹이';
console.log(cat);

// Object.assign 사용
function changeName2(obj) {
  let newObj = Object.assign({}, obj);
  newObj.name = '유재석';
  return newObj;
  // return을 안 하게 되면 heap의 newobj는 garbageCollector가 수거해간다.(제거)
  // return을 하면 이 함수의 실행 완료 후 callStack이 clear되어도 전역에 newobjfmf obj2가 받아서 obj2가 전역에 존재하게 되므로 괜찮다.

}
let obj2 = changeName2(member);
console.log(member);
console.log(obj2)

function changeName(obj) {
  return { ...obj, name: '유재석' };
}

const newObj = changeName(member);
console.log(newObj);
console.log(member);

