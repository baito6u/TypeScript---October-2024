interface Dealership<T> {
    dealershipName: T;
    numberOfSoldCars: number;
}

interface Action<T> {
    sellCar(dealerID: T, model: T): void;
}

