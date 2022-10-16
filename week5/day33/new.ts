interface Car {
  drive(): void
  park(): void
}

// Bus 클래스와 Taxi 클래스를 생성하세요.
class Bus implements Car {
  drive() { };
  park() {
    console.log('버스 주차')
  }
}

class Taxi implements Car {
  drive() { }
  park() {
    console.log('택시 주차')
  }
}

// Factory pattern을 적용하기 위한 서브 클래스입니다.
class CarFactory {
  static getInstance<T extends Car>(type: { new(): T }): T {
    return new type()
  }
}



// CarFactory 클래스의 getInstance메소드를 이용해서 Bus, Taxi 인스턴스를 생성해주세요. 
const bus = CarFactory.getInstance(Bus);
const taxi = CarFactory.getInstance(Taxi);

bus.park();
taxi.park();

class Test {
  constructor(a: number) {

  }
  test(): void {
    console.log('create 성공')
  }

}
function create<T>(c: { new(): T }): T {
  return new c();
}

// const test = create(Test);

// test.test();


// const test2 = CarFactory.getInstance(Test)