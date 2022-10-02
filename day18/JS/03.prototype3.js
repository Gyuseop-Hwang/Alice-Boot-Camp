//속성값 알아보기
const yeonmi = { name: '박연미' };
const dog = { name: '바둑이', age: 5, owner: yeonmi };

// freeze는 Object의 스태틱 메서드
/*
  **freeze
    writable: false, // 외부에서 수정 가능한가
    enumerable: true, // keys 등으로 출력되는가
    configurable: false, // 추가, 삭제 가능한가
*/
// freeze는 수정, 추가, 삭제 다 불가능.
Object.freeze(dog);
dog.name = '누렁이';
console.log(dog);
dog.play = function () {
  console.log('뛰어놀기 ');
};
console.log(dog);
delete dog.name;
console.log(dog);

// yeonmi 자체는 못 바꾼다. 주소값 자체는 freeze 되있으므로 못 바꿈.
yeonmi.name = '아이유';
console.log(dog);

const cat = { ...dog };
//Object.assign(cat, dog);
cat.owner = '유재석';
console.log(dog);

// seal은 Object의 스태틱 메서드
/*
  **seal
    writable: true, // 외부에서 수정 가능한가
    enumerable: true, // keys 등으로 출력되는가
    configurable: false, // 추가, 삭제 가능한가
*/
// seal은 값 수정은 가능. 추가, 삭제만 불가.
Object.seal(cat);
console.log(cat);

cat.name = '나비';
console.log(cat);
delete cat.owner;
console.log(cat);

const rabbit = { name: '토순이' };
Object.preventExtensions(rabbit);

rabbit.name = '토깽이';
console.log(rabbit);
rabbit.age = 1;
console.log(rabbit);
delete rabbit.name;
console.log(rabbit);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));
console.log(Object.isExtensible(rabbit));
