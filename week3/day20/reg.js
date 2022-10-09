const dummy = "Hi there, Nice to meet you. And Hello there and hi. I love grey(gray) color not a gry, graay and graaay. Ya ya YaYaYa YaabcdefghijklmnopqrstuvwxyzABSCEFGHIJKLMNOPQRSTUVWZYZ1234567890.[]{}()\^$|?*+010-898-0893010-405-341202-878-8888 dream.coder.ellie@gmail.com hello@daum.net hello@daum.co.kr http://www.youtu.be/-ZClicWm0zM https://www.youtu.be/-ZClicWm0zM https://youtu.be/-ZClicWm0zM youtu.be/-ZClicWm0zM"

const reg1 = /Hi|Hello/g; // Hi, 또는 Hello를 찾는다.

console.log(dummy.match(reg1))

const reg2 = /(Hi|Hello)|(And)/g;

console.log(dummy.match(reg2))

// [] -> [] 안에 있는 것 중에 "하나"라도 찾아지면

const reg3 = /gr[aed]y/g;

console.log(dummy.match(reg3))

// [a-d] -> a부터 d까지.
const reg4 = /[a-zA-Z0-9]/g // -> a-A까지, z-Z까지 0-9까지 해당하는 것 중에 하나라도 있다면
const reg5 = /[^a-zA-Z0-9]/g // -> a-A까지, z-Z까지 0-9까지 해당하는 것 중에 하나라도 없다면

console.log(dummy.match(reg4))
console.log(dummy.match(reg5))

const reg6 = /^Ya/g; // 문장의 시작에 있는 Ya
const reg7 = /Ya$/g; // 문장의 끝에 있는 Ya

const reg8 = /\d/ // digit /D는 반대 -> 숫자가 아닌 모든 것

// 응용 -> /\d{5}/ 다섯번 반복되는 숫자만 찾음.
const reg9 = /\d{5}/g;

const reg10 = /\w/g // -> 문자인 모든 것. /W는 문자가 아닌 모든 것(숫자문자, 단어문자) -> 즉 특수문자

console.log(dummy.match(reg9))

const emailReg = /[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/g

console.log(dummy.match(emailReg))

const dummy2 = "Hi there, Nice to meet you. And Hello there and hi. I love grey(gray) color not a gry, graay and graaay. Ya ya YaYaYa YaabcdefghijklmnopqrstuvwxyzABSCEFGHIJKLMNOPQRSTUVWZYZ1234567890.[]{}()\^$|?*+010-898-0893010-405-341202-878-8888 dream.coder.ellie@gmail.com hello@daum.net hello@daum.co.kr http://www.youtu.be/-ZClicWm0zM https://www.youtu.be/-ZClicWm0zM https://youtu.be/-ZClicWm0zM youtu.be/-ZClicWm0zM"

const fetchReg = /(https?:\/\/)?(www\.)?youtu.be\/([a-zA-Z0-9-]+)/
const url = 'https://www.youtu.be/-ZClicWm0zM'
console.log(dummy.match(fetchReg))
// console.log(url.match(fetchReg))

// g가 있으면 전체 문장에서 다 찾고. 없으면 하나만 찾아서 자세히.
// m은 멀티라인 활성화(한 줄이 아닌 여러 줄 정규표현식 적용할 때)
let str = `1st place: Winnie1
2nd place: Piglet2
3rd place: Eeyore3`;

const mReg = /^\d/gm

console.log(str.match(mReg))