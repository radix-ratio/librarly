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

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    }
}

