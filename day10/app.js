// tag이름이 'li'인 요소들 선택
const tagNameItems = document.getElementsByTagName("li");

// id값으로 요소를 선택
const selectedItem = document.getElementById("id");

// class속성에 "odd"가 있는 요소들 선택

const classNameItems = document.getElementsByClassName("odd");

// name 속성값이 "first"인 요소들 선택
const nameAttributeItem = document.getElementsByName("first")

// CSS 선택자 selector
const item = document.querySelector("a");

// querySelector와 비슷하지만 복수의 요소를 선택함.
const items = document.querySelectorAll('a')

// 요소의 속성값 선택
// 속성값이 존재하지 않았다면 추가가 되고, 기존에 있었다면 덮어쓰기 된다.
item.style.color = 'red';

item.href = "change"
