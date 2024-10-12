'use strict';
    
const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages: 295
    },
    {
        title: 'Harry Potter',
        author: 'J.K. Rowling',
        pages: 400
    },  
    {
        title: 'Lord of the Rings',
        author: 'J.R.R. Tolkien',
        pages: 700
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

function getNewBookInfo() {
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');


    const newBook = new Book(
        title.value,
        author.value,
        pages.value,
        read.value
    );

    addBookToLibrary(newBook);
}