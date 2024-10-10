// Function to create and print a list of employees with their personal numbers
function employeesList(employeeNames: string[]): void {
  // Loop through each employee name
  employeeNames.forEach((employee) => {
    // Calculate the personal number as the length of the name
    const personalNum: number = employee.length;
    // Print the employee information
    console.log(`Name: ${employee} -- Personal Number: ${personalNum}`);
  });
}

// Example usage:
employeesList([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);

// Expected Output:
// Name: Silas Butler -- Personal Number: 12
// Name: Adnaan Buckley -- Personal Number: 14
// Name: Juan Peterson -- Personal Number: 13
// Name: Brendan Villarreal -- Personal Number: 18

employeesList(["Samuel Jackson", "Will Smith", "Bruce Willis", "Tom Holland"]);
