class Queue<T> {
  private data: Array<T> = [];

  push(num: T): T | number {
    return this.data.push(num);
  }

  pop(): T | undefined {
    return this.data.pop()
  }

}

const numberQueue = new Queue<number>();
console.log(numberQueue.push(0));
console.log(numberQueue.pop())
console.log(numberQueue.push('0'))
const stringQueue = new Queue<string>();
console.log(stringQueue.push('0'));
console.log(stringQueue.pop())
console.log(stringQueue.push(0))
