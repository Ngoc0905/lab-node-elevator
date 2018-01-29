class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.waitingList = [];
    this.passengers = [];
    this.direction = 'up';
  }

  start() {
    var interval = setInterval(() => {
      this.update();
    }, 1000);
  }
  stop() {
    clearInterval(interval);
  }
  update() {
    if (this.direction === 'up')
      this.floorUp();
    else if (this.direction === 'down')
      this.floorDown();
    this.log();
    _passengersEnter();
    _passengersLeave();
  }
  _passengersEnter() {
    let passengersIndex = [];
    for (let i = 0; i < this.waitingList.length; i++)
      if (this.waitingList[i].originFloor === this.floor) {
        passengersIndex.push(i);
      }

    for (let i = passengersIndex.length - 1; i >= 0; i--) {
      let passenger = this.waitingList.splice(passengersIndex[i], 1);
      this.passengers.push(passenger);
      this.requests.push(passenger.destinationFloor);
      console.log(`${passenger.name} has enter the elevator`);
    }
  }

  _passengersLeave() {
    for (let i = this.passengers.length - 1; i >= 0; i--)
      if (this.passengers[i].destinationFloor === this.floor) {
        this.passengers[i].splice(i, 1);
        console.log(this.passengers[i] + ' has left the elevator');
      }
  }
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor += 1;
    }
  }
  floorDown() {
    if (this.floor > 0) {
      this.floor -= 1;
    }
  }
  call(person) {
    this.waitingList.push(person);
  }
  log() {
    console.log('Direction: ' + this.direction + ' | Floor: ' + this.floor);
  }
}

module.exports = Elevator;