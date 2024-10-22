import { Cloth } from './Cloth';

export class Magazine {
    private clothes: Cloth[];

    constructor(public type: string, public capacity: number) {
        this.clothes = [];
    }

    addCloth(cloth: Cloth): boolean {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
            return true;
        }
        return false; // No room for new cloth
    }

    removeCloth(color: string): boolean {
        const index = this.clothes.findIndex(c => c.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true; // Successfully removed
        }
        return false; // Cloth not found
    }

    getSmallestCloth(): Cloth | undefined {
        return this.clothes.reduce((smallest, current) => {
            return (smallest.size < current.size) ? smallest : current;
        }, this.clothes[0]);
    }

    getCloth(color: string): Cloth | undefined {
        return this.clothes.find(c => c.color === color);
    }

    getClothCount(): number {
        return this.clothes.length;
    }

    report(): string {
        const sortedClothes = this.clothes.sort((a, b) => a.size - b.size);
        const clothesReport = sortedClothes.map(cloth => cloth.toString()).join('\n');
        return `${this.type} magazine contains:\n${clothesReport}`;
    }
}