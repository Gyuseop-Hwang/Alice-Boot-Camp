abstract class Animal {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    abstract bark(): void;
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
        this.species = `Dog-${species}`;
    }
    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species);
        this.species = `Cat-${species}`;
    }
    bark() {
        console.log(`${this.name}(${this.species}) : meow!`);
    }
}

const daisy: Dog = new Dog("Daisy", "Bulldog");
daisy.bark();

const cheese: Cat = new Cat("Cheese", "Bengal");
cheese.bark();
