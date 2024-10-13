// Base class
class Animal {
    public eat(): void {
        console.log("eating...");
    }
}

// Derived class
class Dog extends Animal {
    public bark(): void {
        console.log("barking...");
    }
}

// Derived class
class Cat extends Animal {
    public meow(): void {
        console.log("meowing...");
    }
}

// Example usage
const myDog = new Dog();
myDog.eat(); // Output: eating...
myDog.bark(); // Output: barking...

console.log("===============");


const myCat = new Cat();
myCat.eat(); // Output: eating...
myCat.meow(); // Output: meowing...
