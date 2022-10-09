function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (
    (max - min + 1) + min
  ))
}
// 50, 100이 들어온다 치자
// max - min + 1은 51인데
// Math.floor 내림이 적용되므로 0 ~ 50까지의 숫자이다. 즉 return 값은 50 ~ 100의 숫자이다.