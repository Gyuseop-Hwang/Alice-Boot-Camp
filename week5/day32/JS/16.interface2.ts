

{
  // 데이터만 묘사 -> 타입
  type PositionType = {
    x: number;
    y: number;
  };

  // 인터페이스 => 설계도
  interface PositionInterface {
    x: number;
    y: number;
  }

  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1
  };

  class Pos1 implements PositionType {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  class Pos2 implements PositionInterface {
    x: number;
    y: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }


  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // interface PositionInterface {
  //   z: number;
  // }


  type Person = {
    name: string;
    age: number;
  };

  type Name = Person['name'];

  type NumberType = number;
  type Direction = 'left' | 'right';
}
