/**
 *  In main file
 *  let script1 = require('./script1');
 *  console.log(script1.sum(1, 2));
 */

// Create an object 'car' with properties
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

// Access the properties and print their values
console.log("Brand:", car.brand);  // Output: Toyota
console.log("Model:", car.model);  // Output: Corolla
console.log("Year:", car.year);    // Output: 2020


// Create an empty object 'person'
let person = {};

// Add properties to the 'person' object
person.name = "John";        // Add 'name' property
person.age = 30;             // Add 'age' property
person.city = "New York";    // Add 'city' property

// Print the 'person' object to check its properties
console.log(person);  // Output: { name: 'John', age: 30, city: 'New York' }

// Delete a specific property (e.g., 'age')
delete person.age;

// Print the 'person' object after deleting the 'age' property
console.log(person);  // Output: { name: 'John', city: 'New York' }


let book = {
    title: "JavaScript Basics",
    author: "John Doe",
    year: 2021
};

// Using 'in' operator
if ("title" in book) {
    console.log("Using 'in' operator: Property 'title' exists in the book object.");
} else {
    console.log("Using 'in' operator: Property 'title' does not exist in the book object.");
}

if ("publisher" in book) {
    console.log("Using 'in' operator: Property 'publisher' exists in the book object.");
} else {
    console.log("Using 'in' operator: Property 'publisher' does not exist in the book object.");
}

// Using hasOwnProperty()
if (book.hasOwnProperty("author")) {
    console.log("Using 'hasOwnProperty()': Property 'author' exists in the book object.");
} else {
    console.log("Using 'hasOwnProperty()': Property 'author' does not exist in the book object.");
}

if (book.hasOwnProperty("publisher")) {
    console.log("Using 'hasOwnProperty()': Property 'publisher' exists in the book object.");
} else {
    console.log("Using 'hasOwnProperty()': Property 'publisher' does not exist in the book object.");
}

// Using undefined check
if (book.title !== undefined) {
    console.log("Using 'undefined' check: Property 'title' exists in the book object.");
} else {
    console.log("Using 'undefined' check: Property 'title' does not exist in the book object.");
}

if (book.publisher !== undefined) {
    console.log("Using 'undefined' check: Property 'publisher' exists in the book object.");
} else {
    console.log("Using 'undefined' check: Property 'publisher' does not exist in the book object.");
}


// Original user object
const user = {
    name: 'John',
    age: 30,
    address: { city: 'New York', zip: '10001' },
    greet: function() { console.log('Hello ' + this.name); }
};

// Shallow Cloning using Object.assign()
const shallowClone = Object.assign({}, user);

// Shallow Cloning using Spread Syntax
const shallowCloneSpread = { ...user };

// Deep Cloning using JSON.parse() and JSON.stringify()
const deepClone = JSON.parse(JSON.stringify(user));

// Deep Cloning using a custom deepClone function (JSON method)
function deepCloneCustom(obj) {
    return JSON.parse(JSON.stringify(obj));
}
const deepCloneMethod = deepCloneCustom(user);

// Log the results
console.log("Original User:", user);
console.log("Shallow Clone (Object.assign):", shallowClone);
console.log("Shallow Clone (Spread Syntax):", shallowCloneSpread);
console.log("Deep Clone (JSON):", deepClone);
console.log("Deep Clone (Custom Method):", deepCloneMethod);

// Modify nested property in the original object to show differences
user.address.city = 'Los Angeles';

// Log results again to show that shallow clones are affected by nested changes, but deep clones are not
console.log("\nAfter modifying the original user's address:");
console.log("Original User:", user);
console.log("Shallow Clone (Object.assign):", shallowClone);
console.log("Shallow Clone (Spread Syntax):", shallowCloneSpread);
console.log("Deep Clone (JSON):", deepClone);
console.log("Deep Clone (Custom Method):", deepCloneMethod);

function createUser({ name = 'Anonymous', age = 25, city = 'Unknown' } = {}) {
    return {
        name,
        age,
        city
    };
}

// Example usage:
const user1 = createUser({ name: 'John', age: 30, city: 'New York' });
console.log(user1); 
// Output: { name: 'John', age: 30, city: 'New York' }

const user2 = createUser({ name: 'Alice' });
console.log(user2); 
// Output: { name: 'Alice', age: 25, city: 'Unknown' }

const user3 = createUser();
console.log(user3); 
// Output: { name: 'Anonymous', age: 25, city: 'Unknown' }


const company = {
    name: 'Tech Innovators Inc.',
    location: 'New York',
    departments: [
        {
            name: 'Engineering',
            employees: [
                { id: 1, name: 'Alice', position: 'Software Engineer', salary: 90000 },
                { id: 2, name: 'Bob', position: 'Senior Software Engineer', salary: 120000 },
                { id: 3, name: 'Charlie', position: 'Engineering Manager', salary: 150000 }
            ]
        },
        {
            name: 'Marketing',
            employees: [
                { id: 4, name: 'David', position: 'Marketing Specialist', salary: 65000 },
                { id: 5, name: 'Eva', position: 'Marketing Manager', salary: 95000 }
            ]
        },
        {
            name: 'Sales',
            employees: [
                { id: 6, name: 'Frank', position: 'Sales Representative', salary: 50000 },
                { id: 7, name: 'Grace', position: 'Sales Director', salary: 110000 }
            ]
        }
    ]
};

// Example usage:
console.log(company);



const companys = {
  name: "Tech Innovators Inc.",
  location: "Silicon Valley",
  departments: [
    {
      name: "Engineering",
      manager: "Alice Johnson",
      employees: [
        {
          id: 1,
          name: "John Doe",
          role: "Software Engineer",
          hireDate: "2020-03-15",
          contact: {
            email: "john.doe@company.com",
            phone: "555-0101"
          },
          skills: ["JavaScript", "React", "Node.js"],
        },
        {
          id: 2,
          name: "Jane Smith",
          role: "Senior Software Engineer",
          hireDate: "2018-07-22",
          contact: {
            email: "jane.smith@company.com",
            phone: "555-0102"
          },
          skills: ["Python", "Django", "AWS"],
        }
      ]
    },
    {
      name: "Sales",
      manager: "Bob Williams",
      employees: [
        {
          id: 3,
          name: "Sara Lee",
          role: "Sales Manager",
          hireDate: "2019-05-11",
          contact: {
            email: "sara.lee@company.com",
            phone: "555-0103"
          },
          skills: ["Salesforce", "Negotiation", "CRM"],
        },
        {
          id: 4,
          name: "Tom Brown",
          role: "Sales Associate",
          hireDate: "2021-11-01",
          contact: {
            email: "tom.brown@company.com",
            phone: "555-0104"
          },
          skills: ["Customer Support", "Communication", "Sales"],
        }
      ]
    }
  ]
};
