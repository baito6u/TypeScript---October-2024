class Employee {
    name: string;
    salary: number;
    position: string;
    department: string;
    email?: string;
    age?: number;

    constructor(name: string, salary: number, position: string, department: string, email?: string, age?: number) {
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department;
        this.email = email;
        this.age = age;
    }
}

class Department {
    name: string;
    employees: Employee[];

    constructor(name: string) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee: Employee) {
        this.employees.push(employee);
    }

    getAverageSalary(): number {
        const totalSalary = this.employees.reduce((sum, employee) => sum + employee.salary, 0);
        return totalSalary / this.employees.length;
    }
}

// Main logic to read input and process the employees
function companyRoster(input: string[]) {
    const n = parseInt(input[0]);
    const departments: { [key: string]: Department } = {};

    // Read employee data
    for (let i = 1; i <= n; i++) {
        const line = input[i].split(' ');
        const name = line[0];
        const salary = parseFloat(line[1]);
        const position = line[2];
        const departmentName = line[3];
        const email = line[4] || undefined; // optional
        const age = line[5] ? parseInt(line[5]) : undefined; // optional

        const employee = new Employee(name, salary, position, departmentName, email, age);

        // If department does not exist, create it
        if (!departments[departmentName]) {
            departments[departmentName] = new Department(departmentName);
        }
        
        // Add employee to the department
        departments[departmentName].addEmployee(employee);
    }

    // Find the department with the highest average salary
    let highestAvgSalaryDept: Department | null = null;

    for (const dept of Object.values(departments)) {
        if (!highestAvgSalaryDept || dept.getAverageSalary() > highestAvgSalaryDept.getAverageSalary()) {
            highestAvgSalaryDept = dept;
        }
    }

    // Output results
    if (highestAvgSalaryDept) {
        console.log(`Highest Average Salary: ${highestAvgSalaryDept.name}`);

        // Sort employees by salary in descending order
        const sortedEmployees = highestAvgSalaryDept.employees.sort((a, b) => b.salary - a.salary);
        
        // Print employee details
        for (const employee of sortedEmployees) {
            const emailOutput = employee.email || 'n/a';
            const ageOutput = employee.age !== undefined ? employee.age.toString() : '-1';
            console.log(`${employee.name} ${employee.salary.toFixed(2)} ${emailOutput} ${ageOutput}`);
        }
    }
}

// Example Input
companyRoster([
    '4',
    'Peter 120.00 Dev Development peter@abv.bg 28',
    'Tina 333.33 Manager Marketing 33',
    'Sam 840.20 ProjectLeader Development sam@sam.com',
    'George 0.20 Freeloader Nowhere 18'
]);

console.log("=====================");


companyRoster(["6",
    "Silver 496.37 Temp Coding silver@yahoo.com",
    "Sam 610.13 Manager Sales",
    "John 609.99 Manager Sales john@abv.bg 44",
    "Venci 0.02 Director BeerDrinking beer@beer.br 23",
    "Andre 700.00 Director Coding",
    "Popeye 13.3333 Sailor SpinachGroup popeye@pop.ey"])