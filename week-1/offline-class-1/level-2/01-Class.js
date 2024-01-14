class Animal {
	constructor(name, legCount) {
		this.name = name;
		this.legCount = legCount;
	}
	describe() {
		console.log(`${this.name} has ${this.legCount} legs`);
	}
}

const A1 = new Animal("Langoor", 4);

A1.describe();
