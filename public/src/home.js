// helper functions
const sortSlice = arr => arr.sort((objA, objB) => objB.count - objA.count).slice(0, 5)



// return total number of books
const getTotalBooksCount = books => books.reduce((acc, book) => acc + 1, 0);

// return total number of accounts
const getTotalAccountsCount = accounts =>
  accounts.reduce((acc, book) => acc + 1, 0);

// return total number of books checked out
const getBooksBorrowedCount = books => 
  books.reduce(
    (total, book) =>
      total +
      book.borrows
        .filter(entry => !entry.returned)
        .reduce((acc, entry) => acc + 1, 0),
    0
  );

// return the 5 most common genres in object
const getMostCommonGenres = (books, count = {}) => {
  let result = [];

  books.forEach(book =>
    !count[book.genre] ? (count[book.genre] = 1) : count[book.genre]++
  );

  for (let [key, value] of Object.entries(count)) {
    result.push({
      name: key,
      count: value
    });
  }
  return sortSlice(result)
};

// return the 5 most common books in object
const getMostPopularBooks = books => sortSlice(books.map(book => ({ name: book.title, count: book.borrows.length })))

const getMostPopularAuthors = (books, authors, count = {}) => 
  sortSlice(books.reduce((acc, book, entry) => {
    let author = authors.find(match => match.id === book.authorId).name
    acc[entry] = { name: `${author.first} ${author.last}`, count: book.borrows.length }
    return acc
  }, []))
// for each book, count author and add number of borrows to total

// map name and count
// slice
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors
};
