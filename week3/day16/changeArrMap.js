// array 요소가 추가되는 경우
const numbers1 = [1, 2, 3, 4, 5];

const result1 = numbers1.map((number) => {
  numbers1.push(number);
  return number * number;
});

console.log(result1);
console.log(numbers1)
// [1, 4, 9, 16, 25];

// array 요소가 수정되는 경우
const numbers2 = [1, 2, 3, 4, 5];

const result2 = numbers2.map((number) => {
  numbers2.pop();
  return number * number;
});

console.log(result2);
// [1, 4, 9, empty × 2];
