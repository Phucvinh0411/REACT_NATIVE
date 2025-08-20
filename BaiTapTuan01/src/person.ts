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

const person = new Person('Alice', 30);
console.log(person.displayInfo());


// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    displayInfo(): string {
        return `${super.displayInfo()}, Grade: ${this.grade}`;
    }       
}


const student = new Student('Bob', 20, 'A');
console.log(student.displayInfo());