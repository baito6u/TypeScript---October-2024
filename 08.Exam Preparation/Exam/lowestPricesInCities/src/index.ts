const input = [
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
];

function findLowestPrices(input: string[]): void {
    const products: { [key: string]: { price: number; town: string } } = {};

    for (const line of input) {
        const [town, product, priceStr] = line.split(' | ');
        const price = parseFloat(priceStr);

        if (!products[product] || price < products[product].price) {
            products[product] = { price, town };
        }
    }

    for (const product in products) {
        const { price, town } = products[product];
        console.log(`${product} -> ${price} (${town})`);
    }
}

// Example Input


findLowestPrices(input);

