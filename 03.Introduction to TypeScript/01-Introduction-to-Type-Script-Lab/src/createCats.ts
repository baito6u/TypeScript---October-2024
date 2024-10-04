// Define the Cat class
class Cat {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to print the cat's meow message
    meow(): void {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}

// Function to process the input and create Cat objects
function createCats(catsData: string[]): void {
    for (const data of catsData) {
        // Split the string into name and age
        const [name, ageStr] = data.split(' ');
        const age = Number(ageStr);

        // Create a new Cat object
        const cat = new Cat(name, age);

        // Call the meow method
        cat.meow();
    }
}

// Example usage:
createCats(['Whiskers 3', 'Tom 5', 'Luna 2']);
createCats(['Whiskers 3', 'Tom 5', 'Luna 2']);
// Output:
// Whiskers, age 3 says Meow
// Tom, age 5 says Meow
// Luna, age 2 says Meow
createCats(['Mellow 2', 'Tom 5']);
createCats(['Candy 1', 'Poppy 3', 'Nyx 2']);
