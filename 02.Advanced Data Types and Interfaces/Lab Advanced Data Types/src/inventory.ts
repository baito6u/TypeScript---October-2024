interface Hero {
    name: string;
    level: number;
    items: string[];
}

function registerHeroes(data: string[]) {
    // Create an array to store the hero objects
    const heroes: Hero[] = data.map(line => {
        // Split each line by " / " to separate the name, level, and items
        const [name, level, items] = line.split(' / ');

        return {
            name: name,
            level: Number(level), // Convert level from string to number
            items: items ? items.split(', ') : [] // Split items into an array, handle cases with no items
        };
    });

    // Sort heroes by level in ascending order
    heroes.sort((a, b) => a.level - b.level);

    // Print each hero's data
    heroes.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    });
}

// Example usage:
registerHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log('---');

registerHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
