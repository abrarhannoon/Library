import { addBook, searchByAuthor, searchByTitle, checkoutBook, returnBook } from './Library.js';


const NEWLINE = '\n';

const SAMPLE_BOOKS = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '1234567890' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '0987654321' },
    { title: '1984', author: 'George Orwell', isbn: '1122334455' }
];

function addSampleBooksToLibrary() {
    SAMPLE_BOOKS.forEach(book => addBook(book.title, book.author, book.isbn));
    console.log(NEWLINE);
}

function describeBook(book) {
    return `Title: "${book.title}", Author: "${book.author}", ISBN: "${book.isbn}"`;
}

function displayBooksByQuery(query, searchFunction, queryType) {
    const books = searchFunction(query);

    if (books.length === 0) {
        console.log(`No books found by ${queryType} "${query}".`);
    } else {
        console.log(`Books by ${queryType} "${query}":`);
        books.forEach(book => console.log(describeBook(book)));
    }

    console.log(NEWLINE);
}

function manageSampleBookActions() {
    checkoutBook('1234567890');
    checkoutBook('1234567890'); // Attempting to checkout an already checked out book
    returnBook('1122334455');
}

function main() {
    addSampleBooksToLibrary();
    displayBooksByQuery('F. Scott Fitzgerald', searchByAuthor, 'Author');
    displayBooksByQuery('NotTitle', searchByTitle, 'Title');
    manageSampleBookActions();
}

main();
