class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  printPersonInfo(): void {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

function testPersonClass(input: string): void {
  const [name, ageStr] = input.split(" ");
  const age = Number(ageStr);

  const person = new Person(name, age);
  person.printPersonInfo();
}

testPersonClass("Peter 12");
testPersonClass("Sofia 33");
