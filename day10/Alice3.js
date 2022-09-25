const rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    const current = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return current.value;
  }
}

const arr = [];
let answer = '';
rl.on('line', function (line) {
  if (line) {
    arr.push(line.trim());
  } else {
    rl.close();
  }
}).on('close', function () {
  const n = Number(arr.shift());
  const queue = new Queue();
  for (let i = 0; i < n; i++) {
    if (arr[i].length > 1) {
      queue.enqueue(arr[i].split(' ')[1])
    }
    else if (arr[i] == 2 && queue.size) {
      queue.dequeue();
    }
    else if (arr[i] == 3) {
      answer += (queue.size ? queue.first.value : -1) + '\n'
    }
    else if (arr[i] == 4) {
      answer += queue.size + '\n';
    }
  }
  console.log(answer.trim())
  process.exit;
});