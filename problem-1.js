/**
 * 1.Task: Array Filtering and Mapping
 * Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.
 **/

// Step 1: Array of person objects
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 22, gender: "female" },
  { name: "David", age: 28, gender: "male" },
  { name: "Eve", age: 26, gender: "female" },
];

// Step 2: Function to filter females and map to names
function getMaleNames(peopleArray) {
  return peopleArray
    .filter((person) => person.gender !== "female") // filter out females
    .map((person) => person.name); // map to names
}

// Step 3: Print the result
const maleNames = getMaleNames(people);
console.log(maleNames);
