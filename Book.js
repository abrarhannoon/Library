export default class Book {
    #title;
    #author;
    #isbn;
    #available;

    constructor(title, author, isbn, available = true) {
        this.#title = title;
        this.#author = author;
        this.#isbn = isbn;
        this.#available = available;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get isbn() {
        return this.#isbn;
    }

    get available() {
        return this.#available;
    }

    setAvailable(value) {
        this.#available = value;
    }

    displayInfo() {
        console.log(`This book title is ${this.#title}, author: ${this.#author}, isbn: ${this.#isbn}, available: ${this.#available}.`);
    }
}
