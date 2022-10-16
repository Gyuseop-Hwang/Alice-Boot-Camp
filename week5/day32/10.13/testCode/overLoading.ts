// 기존 방법 (오버로딩)
type SuperPrint = {
    (arr: number[]): void;
    (arr: boolean[]): void;
};

const superPrint: SuperPrint = (arr) => {
    arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["a", "b", "c", "d"]); // 안됨
// 이런식으로 다 넣어줘야 함

// // generic 사용
// type SuperPrint = {
//     <T>(arr: T[]): void;
// };

// const superPrint: SuperPrint = (arr) => {
//     arr.forEach((i) => console.log(i));
// };

// superPrint([1, 2, 3, 4]);
// superPrint([true, false, true]);
// superPrint(["a", "b", "c", "d"]);
// superPrint(["a", "b", 3, true]);
