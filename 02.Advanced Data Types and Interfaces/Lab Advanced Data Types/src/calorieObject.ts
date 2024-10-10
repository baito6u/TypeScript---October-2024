function createCalorieObject(arr: string[]): void {
    // const calorieObj: {[key: string]: number} = {};

    // // Iterate over the array, taking pairs of (food, calories)
    // for (let i = 0; i < arr.length; i+=2) {
    //     const food = arr[i];
    //     const calories = Number(arr[i + 1]);

    //     // Add the food and calories to the object
    //     calorieObj[food] = calories;
    // }

    const calorieObj = arr.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            // Set the food as key, and the next element (converted to a number) as value
            acc[curr] = Number(arr[index + 1]);
        }
        return acc;
    }, {} as { [key: string]: number }); // Initialize accumulator as an empty object

    // Print the resulting object

    console.log(calorieObj);

}

createCalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// Output: { Yoghurt: 48, Rise: 138, Apple: 52 }

createCalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
// Output: { Potato: 93, Skyr: 63, Cucumber: 18, Milk: 42 }