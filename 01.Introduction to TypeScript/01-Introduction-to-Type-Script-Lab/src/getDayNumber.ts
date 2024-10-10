// Enum for days of the week
enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

// Function to get the day number
// function getDayNumber(day: string): void {
//     const dayLowerCase = day.toLowerCase();

//     // Create a mapping between string and enum
//     const daysMap: { [key: string]: DaysOfWeek } = {
//         "monday": DaysOfWeek.Monday,
//         "tuesday": DaysOfWeek.Tuesday,
//         "wednesday": DaysOfWeek.Wednesday,
//         "thursday": DaysOfWeek.Thursday,
//         "friday": DaysOfWeek.Friday,
//         "saturday": DaysOfWeek.Saturday,
//         "sunday": DaysOfWeek.Sunday,
//     };

//     // Check if the day exists in the map, otherwise print an error
//     if (daysMap[dayLowerCase] !== undefined) {
//         console.log(daysMap[dayLowerCase]);
//     } else {
//         console.log("Error: Invalid day of the week");
//     }
// }

function getDayNumber(day: string): void {
  if (DaysOfWeek[day]) {
    console.log(DaysOfWeek[day]);
  } else {
    console.log("error");
  }
}

// Example usage:
getDayNumber("Monday"); // Output: 1
getDayNumber("Sunday"); // Output: 7
getDayNumber("Holiday"); // Output: Error: Invalid day of the week
