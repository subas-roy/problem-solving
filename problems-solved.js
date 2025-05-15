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

/**
 * 2.Task: Object Manipulation
 * Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.
 **/

// Array of book objects
const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
];

// Function to get only titles from the array of books
function getBookTitles(bookArray) {
  return bookArray.map((book) => book.title);
}

// Call the function and print the result
const titles = getBookTitles(books);
console.log(titles);
