function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }

  return increase;
}
const increase = makeCounter();
increase();
increase();
increase();


// ES6처럼 class의 private 속성 등장 이전에 위처럼 closure를 이용해서 capsule화 작업을 했다.
class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count)
  }
}

const cobj = new Counter();
cobj.increase();
cobj.increase();
cobj.increase();

