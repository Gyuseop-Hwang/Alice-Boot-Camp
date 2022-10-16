interface Animal {
  makeSound(): void,
}


interface Dog extends Animal {
  speed: number
}

class Bulldog implements Dog {
  makeSound(): void {
    console.log('멍멍이');
  }
  speed: 10;
}