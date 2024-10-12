'use strict';
    
const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295,
        read: true
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 400,
        read: false
    },  
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pages: 700,
        read: true
    }
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

    return newBook;
}

function addNewBook() {
    const newBook = getNewBookData();
    addBookToLibrary(newBook);
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



showBooks();