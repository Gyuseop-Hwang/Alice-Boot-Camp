abstract class Car {

  constructor(protected name: string) {

  }

  abstract drive(): void;
  abstract park(): void;
}

class Taxi extends Car {

  constructor(name: string) {
    super(name)
  }

  drive() { };
  park() {
    console.log(`${this.name} 주차`)
  }
}

class Bus extends Car {

  constructor(name: string) {
    super(name);
  }
  drive() { };
  park() {
    console.log(`${this.name} 주차`)
  }
}

class VehicleFactory {

  static getInstance<T extends Car>(type: { new(name: string): T }, name: string): T {
    return new type(name);
  }

}

const taxi = VehicleFactory.getInstance(Taxi, '택시');
const bus = VehicleFactory.getInstance(Bus, '버스');
taxi.park();
bus.park();