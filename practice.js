class Vehicle {
    constructor(licensePlate, color) {
        this.licensePlate = licensePlate;
        this.color = color;
    }
 
    beep() {
        return 'BEEP, BEEP';
    }
 
    changeColor(newColor) {
        this.color = newColor;
    }
}
 
class Truck extends Vehicle {
    constructor(licensePlate,color,transmission) {
        super(licensePlate, color);
        this.transmission = transmission;
    }
}

const truck = new Truck(000001, 'red', 'manual');

console.log(truck.beep());
