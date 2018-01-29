const Elevator = require('./elevator.js');
const Person = require('./person.js');

let elevator = new Elevator();
let person1 = new Person("Lam", 0, 4);
let person2 = new Person("Ngoc", 0, 4);

elevator.call(person1);
elevator.call(person2);
elevator.floorUp();
elevator.update();
elevator.floorUp();
elevator.update();
elevator.floorDown();
elevator.update();
elevator._passengersLeave();
elevator._passengersEnter();