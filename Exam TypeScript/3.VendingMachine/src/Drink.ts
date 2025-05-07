export class Drink {
    name: string;
    price: number;
    volume: number;
  
    constructor(name: string, price: number, volume: number) {
      this.name = name;
      this.price = price;
      this.volume = volume;
    }
  
    toString(): string {
    const formattedPrice = this.price.toFixed(1);
      return `Name: ${this.name}, Price: $${formattedPrice}, Volume: ${this.volume} ml`;
    }
  }