'use strict';
    
const myLibrary = [
    new Book('The Lord of the Rings', 'J.R.R. Tolkien', 700, true),
    new Book('Harry Potter', 'J.K. Rowling', 400, true),
    new Book('The Hobbit', 'J.R.R. Tolkien', 300, true),
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}


function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function clearAddingBooksForm() {
    const dialogForm = document.querySelector('#dialog >.form');

    dialogForm.reset();
    window.dialog.close()
}

function getNewBookData() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');


    const newBook = new Book(
        title.value,
        author.value,
        parseInt(pages.value),
        read.checked
    );

    clearAddingBooksForm();

    return newBook;
}

function addNewBook() {
    const newBook = getNewBookData();
    addBookToLibrary(newBook);
    showOneBook(newBook);
}

function createBookCardTemplate(book) {
    const bookCardTemplate = `
        <div class="book-card">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>Pages: ${book.pages}</p>
            
            <button class="btn-wide bg-pri">Read</button>
            <button class="btn-wide bg-n-3">Delete</button>
        </div>
    `;

    return bookCardTemplate;
}

function showBooks() {
    const booksSection = document.querySelector('[data-block="books"]');

    myLibrary.forEach(book => {
        const bookCardTemplate = createBookCardTemplate(book);
        booksSection.innerHTML += bookCardTemplate;
    });
}

function showOneBook(newBook) {
    const booksSection = document.querySelector('[data-block="books"]');
    const bookCardTemplate = createBookCardTemplate(newBook);
    booksSection.innerHTML += bookCardTemplate;
}


window.loaded = showBooks();