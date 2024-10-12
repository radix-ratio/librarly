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
}

function addNewBook() {
    getNewBookData();
    addBookToLibrary(newBook);
}