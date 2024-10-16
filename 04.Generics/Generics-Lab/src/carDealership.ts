interface Dealership<T> {
    dealershipName: T;
    numberOfSoldCars: number;
}

interface Action<T> {
    sellCar(dealerID: T, model: T): void;
}

class CarDealership<T> implements Dealership<T>, Action<T> {
    public modelsSold: { [key: string]: T }; // Store dealerID as key and model as value
    
    dealershipName: T;
    numberOfSoldCars: number;

    constructor(dealershipName: T) {
        this.dealershipName = dealershipName;
        this.numberOfSoldCars = 0;
        this.modelsSold = {};

    }

    sellCar(dealerID: T, model: T): void {
        this.modelsSold[dealerID as string] = model; // this.modelsSold[String(dealerID)] = model;
        this.numberOfSoldCars += 1;
    }

    showDetails(): string {
        let result = `${this.dealershipName}:\n`

        for (let dealerID in this.modelsSold) {
            result += `${dealerID} sold ${this.modelsSold[dealerID]}\n`;
        }

        return result.trim();
    }
    
}

let dealership = new CarDealership<string>('SilverStar');

// Selling cars
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');

// Output the details
console.log(dealership.showDetails());