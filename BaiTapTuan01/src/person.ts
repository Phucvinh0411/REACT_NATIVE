// Create a class Person with attributes name and age. Write a method to display this information.
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    displayInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
//  use this class
const person = new Person('Alice', 30);
console.log(person.displayInfo());