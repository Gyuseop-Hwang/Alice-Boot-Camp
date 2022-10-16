class Dog {
    name: string;
    species: string;

    constructor(name: string, species: string) {
        this.name = name;
        this.species = species;
    }

    bark() {
        console.log(`${this.name}(${this.species}) : BOWWOW!`);
    }
}

const daisy = new Dog("Daisy", "Bulldog");

daisy.bark();
