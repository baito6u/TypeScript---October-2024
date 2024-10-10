// const createPersonInfo = (firstname: string, lastName: string, age: string) => ({
//     firstname,
//     lastName,
//     age: Number(age)
// });

// console.log(createPersonInfo("Peter", "Pan", "20"));
// // Output: { firstName: 'Peter', lastName: 'Pan', age: 20 }

// console.log(createPersonInfo("George", "Smith", "18"));
// // Output: { firstName: 'George', lastName: 'Smith', age: 18 }


// Define an interface for the Person object
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

// Function to create a person object using the interface
const createPersonInfo = (firstName: string, lastName: string, age: string): Person => ({
    firstName,
    lastName,
    age: Number(age)
});

// Example usage:
const person1 = createPersonInfo("Peter", "Pan", "20");
console.log(person1);
// Output: { firstName: 'Peter', lastName: 'Pan', age: 20 }

const person2 = createPersonInfo("George", "Smith", "18");
console.log(person2);
// Output: { firstName: 'George', lastName: 'Smith', age: 18 }
