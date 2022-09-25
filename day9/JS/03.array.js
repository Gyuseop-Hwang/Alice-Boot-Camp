
let arr = [1, 2, 3, 4];
console.log(arr);
let array = new Array(3);
console.log(array);
array = new Array(1, 2, 3);
console.log(array);
array = Array.of(1, 2, 3, 4, 5);
console.log(array);
array = Array.from({ length: 10 }, () => Array(2).fill(1));
let array2 = Array.from({ length: 10 }, () => Array.from({ length: 2 }).fill(1));
console.log(array)
console.log(array2)
array2 = Array.from({ 0: 1, 1: 2, 2: 3, length: 5 })
console.log(array2)
array2 = array2.fill(1)
console.log(array2)
// 값추가
let subject = [];
console.log(subject);
subject[0] = 'javascript';
subject[1] = 'html';
subject[2] = 'css';
subject[5] = '빈칸 두개'
delete subject[1]
delete subject[5]
console.log(subject.length);
console.log(subject)

// 값 삭제
// delete subject[1];
// console.log(subject);

