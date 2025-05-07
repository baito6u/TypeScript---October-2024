import { Drink } from "./Drink";

export class VendingMachine {
  private buttonCapacity: number;
  private drinks: Drink[] = [];

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity;
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink); 
    }
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex(drink => drink.name === name);
    if (index !== -1) {
      this.drinks.splice(index, 1);
      return true;
    }
    return false;
  }

  getLongest(): string | undefined {
    if (this.drinks.length === 0) return undefined;
    const longestDrink = this.drinks.reduce((longest, current) => 
      current.volume > longest.volume ? current : longest
    );
    return longestDrink.toString();
  }

  getCheapest(): string | undefined {
    if (this.drinks.length === 0) return undefined;
    const cheapestDrink = this.drinks.reduce((cheapest, current) => 
      current.price < cheapest.price ? current : cheapest
    );
    return cheapestDrink.toString();
  }

  buyDrink(name: string): string | undefined {
    const drink = this.drinks.find(drink => drink.name === name);
    return drink ? drink.toString() : undefined;
  }

  get getCount(): number {
    return this.drinks.length;
  }

  report(): string {
    const drinkReport = this.drinks.map(drink => drink.toString()).join("\n");
    return `Drinks available:\n${drinkReport}`;
  }
}