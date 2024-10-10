interface TownInfo {
    town: string;
    latitude: string;
    longitude: string;
}

function parseTowns(data: string[]): void {
    data.forEach(line => {
        // Split the input string by ' | '
        const [town, lat, lon] = line.split(' | ');

        // Create an object with parsed and formatted values
        const townInfo: TownInfo = {
            town: town.trim(), // Trim any extra spaces
            latitude: Number(lat).toFixed(2), // Convert to number and format to 2 decimals
            longitude: Number(lon).toFixed(2) // Convert to number and format to 2 decimals
        };

        // Print the town info object
        console.log(townInfo);
    });
}

// Example usage:
parseTowns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

console.log('---');

parseTowns([
    'Plovdiv | 136.45 | 812.575'
]);
