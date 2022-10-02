function isWeekend(today) {
  let day = today.getDay();
  return day === 0 || day === 6;
}


console.log(isWeekend(new Date("2022/10/01")))

console.log(new Date("2022/10/01").getDay())
console.log(new Date("2022/10/01").getDate())
console.log(new Date("2022/10/01").getMonth())
console.log(new Date("2022/10/01").getFullYear())
const date = new Date("2022/10/01")


