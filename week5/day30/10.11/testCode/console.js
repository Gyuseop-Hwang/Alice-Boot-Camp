const str = "abc";
const num = 1;
const bool = true;
const obj = {
    outside: {
        inside: {
            key: "value",
        },
    },
};

// 전체시간 측정 시작
console.time("전체시간");
console.log("로그");
console.log(str, num, bool);
//  error내용 콘솔에 표시
console.error("Error 메시지");

// 배열 요소 테이블 형태로 시각화
console.table([
    { name: "elice", age: 3 },
    { name: "토깽이", age: 20 },
]);

// console.dir(객체, 옵션) : 객체를 콘솔에 표시하며 옵션값으로 colors를 넣으면 색갈이 표시되고, depth을 주면 객체 안 몇단계까지 보여줄 것인지를 결정합니다.)
console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

// 함수 시간 측정
console.time("시간측정");
for (let i = 0; i < 10000; i++) {}
// 함수 시간 측정 끝
console.timeEnd("시간측정");

function b() {
    // Error 위치 찾기 error발생시 에리발생한 위치를 알려줍니다. (자주쓰지는 않지만 error가 어디서 나는 지 모를때 사용해보세요!)
    console.trace("error 위치 추적");
}

function a() {
    b();
}

a();

// 전체시간 측정 끝
console.timeEnd("전체시간");
