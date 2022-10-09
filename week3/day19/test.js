function makeAdultNameList(arrObj) {
  let answer = ''
  arrObj.forEach(x => {
    if (x.age >= 20) {
      answer += `<li>${x.name}</li>`
    }
  })
  return answer;
}

var inputA = [{
  name: "박태환",
  age: 35
},
{
  name: "유재석",
  age: 49
},
{
  name: "김강훈",
  age: 12
},
{
  name: "최태민",
  age: 15
},
{
  name: "이바람",
  age: 52
},
{
  name: "이지원",
  age: 15
}]




// 지시사항에 따라 makeChildNameList 함수의 코드를 작성합니다.

function makeAdultNameList(arrObj) {
  let answer = ''
  arrObj.forEach(x => {
    if (x.age < 20) {
      answer += `<li>${x.name}</li>`
    }
  })
  return answer;
}


console.log(makeAdultNameList(inputA))

