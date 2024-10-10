interface ProductInfo {
    price: number;
    town: string;
}

function lowestPricesInCities(data: string[]): void {
    const productRegistry: { [productName: string]: ProductInfo } = {};

    for (const entry of data) {
        const [town, product, priceStr] = entry.split(' | ');
        const price = Number(priceStr);

        if (!productRegistry[product] || productRegistry[product].price > price) {
            // If the product doesn't exist or the current price is lower, update the registry
            productRegistry[product] = { price, town };
        }
    }

    // Output the results in the required format
    for (const product in productRegistry) {
        const { price, town } = productRegistry[product];
        console.log(`${product} -> ${price} (${town})`);
    }
}

// Example usage:
lowestPricesInCities([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);
