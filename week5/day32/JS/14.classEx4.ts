{

  type Kinds = '포유류' | '파충류' | '양서류' | '조류';
  abstract class Animal {

    constructor(protected name: string, private kind: Kinds, protected food: string) {
      this.name = name;
      this.kind = kind;
      this.food = food;
    }

    protected move(): void {
      console.log(`${this.name} 이동중.... `);
    }
    eat(): void {
      console.log(`${this.food} 먹는중 `);
    }
    abstract cry(): void;
  }

  class Cat extends Animal {

    constructor(name: string, kind: Kinds, food: string) {
      super(name, kind, food);

    }

    cry(): void {
      console.log("냐오오옹")
    }
    // 메서드 오버라이딩 overwriting
    // 하지만 부모의 method가 완전히 사라지는 것이 아님. 그래서 다음처럼
    // super.move()로 부모의 기존 메소드 그대로 호출이 가능하다.
    move(): void {
      super.move();
      console.log(`${this.name} 이 마당으로 탈출해서 이동중.... `);
    }

  }

  class Chicken extends Animal {
    public egg: number = 0;
    constructor(name: string, kind: Kinds, food: string) {
      super(name, kind, food);
    }

    cry(): void {
      console.log("꼬끼오~~~  ")
      this.move();
    }

    layEgg() {
      console.log("알을 낳았다 뿅! ")
      this.egg += 1;
    }

  }

  const nabi = new Cat('나비', '포유류', '참치캔');

  nabi.move();
  nabi.cry();
  nabi.eat();

  const poyo = new Chicken('포요', '조류', '지렁이');
  //console.log(poyo);
  poyo.layEgg();
  poyo.cry();

}