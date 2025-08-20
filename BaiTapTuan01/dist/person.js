"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Create a class Person with attributes name and age. Write a method to display this information.
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
//  use this class
const person = new Person('Alice', 30);
console.log(person.displayInfo());
//# sourceMappingURL=person.js.map