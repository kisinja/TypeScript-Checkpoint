// Run: tsc app.ts && node app.js
interface Vehicle {
    make: string;
    model: string;
    year: number;
    start(): void;
}

// Implement the Vehicle interface
class Car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start(): void {
        console.log("Car engine started");
    }
}

// Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2021);
myCar.start(); // Should log "Car engine started" to the console