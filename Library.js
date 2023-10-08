import Book from "./Book.js";
import {bookExists} from "./Utils.js"
export {addBook,searchByAuthor,searchByTitle,checkoutBook,returnBook,libraryBooks};



const libraryBooks = [];

const addBook = (title, author, isbn) => {
    if (isDuplicatedIsbn(isbn)) {
        console.error("Can't add the book, the ISBN is related to another book in the system.");
        return;
    }
    const newBook=new Book(title, author, isbn);
    libraryBooks.push(newBook);
    console.log(`${ newBook.title} book added succsessfully.`)
}

const isDuplicatedIsbn = isbn => libraryBooks.some(book => book.isbn === isbn);

const searchByTitle = title => libraryBooks.filter(book => book.title === title);

const searchByAuthor = author => libraryBooks.filter(book => book.author === author);

const modifyBookAvailability = (isbn, shouldBeAvailable) => {
    const bookByIsbn = libraryBooks.find(book => book.isbn === isbn);

    if (bookExists(bookByIsbn)) {
        if (bookByIsbn.available === shouldBeAvailable) {
            const status = shouldBeAvailable ? "already available" : "already checked out";
            console.log(`${bookByIsbn.title} is ${status}.`);
            return;
        }

        bookByIsbn.setAvailable(shouldBeAvailable);

        const action = shouldBeAvailable ? "returned" : "checked out";
        console.log(`${bookByIsbn.title} has been ${action}.`);
        return;
    }

    console.log(`Book with ISBN: ${isbn} not found.`);
}

const checkoutBook = isbn => modifyBookAvailability(isbn, false);

const returnBook = isbn => modifyBookAvailability(isbn, true);
