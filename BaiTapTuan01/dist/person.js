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
const person = new Person('Alice', 30);
console.log(person.displayInfo());
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo() {
        return `${super.displayInfo()}, Grade: ${this.grade}`;
    }
}
const student = new Student('Bob', 20, 'A');
console.log(student.displayInfo());
export {};
//# sourceMappingURL=person.js.map