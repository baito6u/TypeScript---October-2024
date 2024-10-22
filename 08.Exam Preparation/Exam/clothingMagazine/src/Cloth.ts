export class Cloth {
    constructor(public color: string, public size: number, public type: string) {}

    toString(): string {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}