// Define an interface to represent a town registry
interface TownRegistry {
    [town: string]: number;
}

function townPopulation(data: string[]): void {
    // Create a map to store the population of each town
    const townRegistry: TownRegistry = {};

    // Process each entry in the input data
    data.forEach(entry => {
        // Split the entry by ' <-> ' to get the town name and population
        const [town, population] = entry.split(' <-> ');

        // Parse the population to a number
        const populationNumber: number = Number(population);

        // If the town already exists, add the population, otherwise set it
        if (townRegistry[town]) {
            townRegistry[town] += populationNumber;
        } else {
            townRegistry[town] = populationNumber;
        }
    });

    // Print the results
    for (const town in townRegistry) {
        console.log(`${town} : ${townRegistry[town]}`);
    }
}

// Example usage:
townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);

console.log('---');

townPopulation([
    'Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);
