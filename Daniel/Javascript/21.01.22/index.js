let numbers = [2, 45, 3, 67, 34, 567, 34, 345, 123];

console.log(numbers);

numbers.sort(function (a, b) {
  return a - b;
});

let books = [
  { author: "Bill Gates", title: "The Road Ahead", bookId: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", bookId: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of the Hunger Games",
    bookId: 3245,
  },
];

books.sort();
