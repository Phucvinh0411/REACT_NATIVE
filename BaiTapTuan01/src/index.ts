// import { Person } from './person';
import {Car} from './car.js';
import {Rectangle} from './rectangle.js'
function hello(name: string): string {
  return `Hello, ${name}!`;
}

function cau3(car:Car): string{
    return car.displayInfor();
}

function cau4(rec: Rectangle):number{
    return rec.calculateArea();
}

const car = new Car('Toyota', 'Corolla');
const rec= new Rectangle(10,20);
console.log(cau3(car));
console.log("Calculate Area: ", cau4(rec));
