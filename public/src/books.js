// return author with matching id
const findAuthorById = ((authors, id) => authors.find(author => author.id === id))

// return book with matching id
const findBookById = ((books, id) => books.find(book => book.id === id))

// returns 1 array containing 2 arrays, 1 with checked out and 1 with returned
const partitionBooksByBorrowedStatus = (books => 
  [books.filter(book => !book.borrows[0].returned), books.filter(book => book.borrows[0].returned)])

/* return an array of 10 or less account objects that represents the accounts given by 
the IDs in the provided book's `borrows` array. each account object should include the 
`returned` entry */
const getBorrowersForBook = ((book, accounts) => {
  const { borrows } = book
  let result = borrows.map(({ id, returned }) => {
    let account = accounts.find(account => account.id === id)
    return { ...account, returned }
  })
  return result.slice(0, 10)
})

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
