// 현재 시간
let tmp = new Date();
console.log(tmp);

// 특정한 시간
tmp = new Date(1000); // UTC(1970년 1월 1일 00:00:00) 기준 + 인자값밀리초
console.log(tmp);

// 문자열
tmp = new Date("2022-10-04"); // 특정 날짜의 자정(new Date("YYYY-MM-DD"))
console.log(tmp);

tmp = new Date("2022-10-04T11:11:11"); // 특정 날짜 특정 시간(new Date("YYYY-MM-DDThh:mm:ss"))
console.log(tmp);

tmp = new Date("10/04/12 11:11:11");
console.log(tmp);

tmp = new Date("October 4, 2022 11:11:11");
console.log(tmp);

tmp = new Date("oct 4 2022 11:11:11");
console.log(tmp);

// 인자값
tmp = new Date(2022, 9, 04, 11, 11, 11); // 특정 날짜 특정 시간(new Date(YYYY,MM,DD,hh,mm,ss))
console.log(tmp);

// node.js 에서는 바로 인식 , Window에서는 Index로 인식
tmp = new Date(2022, 10); // 특정 날짜 특정 시간(new Date(YYYY,MM[, 1,0,0,0,0]))
console.log(tmp);

// Time stamp (기준값으로 부터 얼마나 지났는지)
console.log(tmp.getTime());

// 다양한 값들
console.log(tmp.getFullYear());
console.log(tmp.getMonth()); // window에서는 0 이 1월입니다.
console.log(tmp.getDate());
console.log(tmp.getDay()); // 요일은 0 이 일요일 입니다.
console.log(tmp.getHours());
console.log(tmp.getMinutes());
console.log(tmp.getSeconds());
console.log(tmp.getMilliseconds());

// Data의 여러가지 메서드

// 생성된 날짜 수정하기 set
tmp.setFullYear(2030);
console.log(tmp);

console.log(tmp.toLocaleDateString()); // 날짜 정보
console.log(tmp.toLocaleTimeString()); // 시간 정보
console.log(tmp.toLocaleString()); // 날짜 시간 정보

// 추가기능 (자동 수정)
tmp = new Date(2022, 9, 10);
console.log(tmp);

console.log(Date.now()); // 호출한 순간의 타임스탬프

// 형변환
console.log(typeof tmp); // object
console.log(String(tmp)); // 날자값 그대로 문자열
console.log(Number(tmp)); // getTime()을 통해 얻은 타임스탬프와 동일
console.log(Boolean(tmp)); // true

// Data끼리 연산
let tmp2 = new Date(2022, 10);

const timeDiff = tmp2 - tmp;
console.log(timeDiff); // ms
console.log(timeDiff / 1000); // sec
console.log(timeDiff / 1000 / 60); // min
console.log(timeDiff / 1000 / 60 / 60); // hour
console.log(timeDiff / 1000 / 60 / 60 / 24); // date
