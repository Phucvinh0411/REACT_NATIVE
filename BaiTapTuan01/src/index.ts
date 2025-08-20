// import { Person } from './person';
import {Car} from './car.js';
function hello(name: string): string {
  return `Hello, ${name}!`;
}

function cau2(car:Car): string{
    return car.displayInfor();
}

const car = new Car('Toyota', 'Corolla');
console.log(cau2(car));