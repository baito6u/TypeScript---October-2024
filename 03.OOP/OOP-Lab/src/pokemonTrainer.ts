class Pokemon {
    name: string;
    element: string;
    health: number;

    constructor(name: string, element: string, health: number) {
        this.name = name;
        this.element = element;
        this.health = health;
    }

    // Method to reduce health
    takeDamage(damage: number): void {
        this.health -= damage;
    }
}

class Trainer {
    name: string;
    badges: number;
    pokemons: Pokemon[];

    constructor(name: string) {
        this.name = name;
        this.badges = 0; // Initial badges count
        this.pokemons = [];
    }

    // Method to add a Pokemon to the trainer
    addPokemon(pokemon: Pokemon): void {
        this.pokemons.push(pokemon);
    }

    // Method to check for a Pokemon with the given element
    hasElement(element: string): boolean {
        return this.pokemons.some(pokemon => pokemon.element === element);
    }

    // Method to handle tournament logic
    handleTournament(element: string): void {
        if (this.hasElement(element)) {
            this.badges++; // Earn a badge
        } else {
            this.pokemons.forEach(pokemon => {
                pokemon.takeDamage(10); // Damage Pokémon
                // Remove dead Pokémon
                if (pokemon.health <= 0) {
                    this.removePokemon(pokemon);
                }
            });
        }
    }

    // Method to remove a Pokémon from the trainer
    private removePokemon(pokemon: Pokemon): void {
        this.pokemons = this.pokemons.filter(p => p !== pokemon);
    }

    // Method to get the number of Pokémon
    get numberOfPokemons(): number {
        return this.pokemons.length;
    }
}

// Main logic for reading input and processing
function pokemonTrainer(input: string[]) {
    const trainers: { [name: string]: Trainer } = {};

    let index = 0;

    // Read Pokemon and Trainer data
    while (input[index] !== "Tournament") {
        const [trainerName, pokemonName, pokemonElement, pokemonHealth] = input[index].split(' ');
        const health = parseInt(pokemonHealth);
        
        // Create new trainer if not already exists
        if (!trainers[trainerName]) {
            trainers[trainerName] = new Trainer(trainerName);
        }

        // Create a new Pokémon and add to the trainer
        const pokemon = new Pokemon(pokemonName, pokemonElement, health);
        trainers[trainerName].addPokemon(pokemon);
        index++;
    }

    index++; // Move to tournament commands

    // Process tournament commands
    while (input[index] !== "End") {
        const element = input[index];
        for (const trainer of Object.values(trainers)) {
            trainer.handleTournament(element);
        }
        index++;
    }

    // Prepare output
    const sortedTrainers = Object.values(trainers)
        .sort((a, b) => b.badges - a.badges); // Sort by badges

    // Print results
    sortedTrainers.forEach(trainer => {
        console.log(`${trainer.name} ${trainer.badges} ${trainer.numberOfPokemons}`);
    });
}

// Example Input

pokemonTrainer([
    'Peter Charizard Fire 100',
    'George Squirtle Water 38',
    'Peter Pikachu Electricity 10',
    'Tournament',
    'Fire',
    'Electricity',
    'End'
]);

console.log("===============");

pokemonTrainer([
    "Sam Blastoise Water 18",
    "Narry Pikachu Electricity 22",
    "John Kadabra Psychic 90",
    "Tournament",
    "Fire",
    "Electricity",
    "Fire",
    "End"])