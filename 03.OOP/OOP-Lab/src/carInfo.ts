class Car {
  public brand: string;
  public model: string;
  public horsepower: number;

  constructor(brand: string, model: string, horsepower: number) {
    this.brand = brand;
    this.model = model;
    this.horsepower = horsepower;
  }

  getBrand(): string {
    return this.brand;
  }

  setBrand(brand: string): void {
    this.brand = brand;
  }

  getModel(): string {
    return this.model;
  }

  setModel(model: string): void {
    this.model = model;
  }

  getHorsepower(): number {
    return this.horsepower;
  }

  setHorsepower(horsepower: number): void {
    this.horsepower = horsepower;
  }

  printCareInfo(): void {
    console.log(
      `The car is: ${this.brand} ${this.model} - ${this.horsepower} HP.`
    );
  }
}

function testCarInfoProgram(input: string): void {
  const [brand, model, horsepowerStr] = input.split(" ");
  const horsepower = Number(horsepowerStr);

  const car = new Car(brand, model, horsepower);
  car.printCareInfo();
}

testCarInfoProgram("Chevrolet Impala 390");
testCarInfoProgram("Skoda Karoq 150");
