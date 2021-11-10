// return account with matching id
const findAccountById = (accounts, id) =>
  accounts.find(account => account.id === id);

// return alphabetically sorted array
const sortAccountsByLastName = accounts =>
  accounts.sort((a, b) => (a.name.last < b.name.last ? -1 : 1));

// returns the number of times the account's ID appears in any book's `borrows` array.
const getTotalNumberOfBorrows = (account, books) =>
  books.reduce(
    (total, book) =>
      total +
      book.borrows
        .filter(entry => entry.id === account.id)
        .reduce((acc, entry) => acc + 1, 0),
    0
  );

// returns an array of book objects, including author information, that represents all books currently checked out by the given account.
const getBooksPossessedByAccount = (account, books, authors) => {
  const result = books.filter(book =>
    book.borrows.some(entry => entry.id === account.id && !entry.returned)
  );
  result.forEach(
    book => (book.author = authors.find(author => author.id === book.authorId))
  );
  return result;
};

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount
};
