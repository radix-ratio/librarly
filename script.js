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
    const form = document.querySelector('#dialog >.form');
    if (!form.checkValidity()) {
        return;
    }

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
    if (
        newBook.title.length > 0 && 
        newBook.author.length > 0 &&
        newBook.pages > 0 
        ) {
            console.log(newBook);
            addBookToLibrary(newBook);
            showOneBook(newBook);
        }
    
}

function createBookCardTemplate(book) {
    let bookCardTemplateInfo = `
        <div class="book-card">
            <h4>${book.title}</h4>
            <p>${book.author}</p>
            <p>Pages: ${book.pages}</p>
        
    `;

    if (book.read) {
        bookCardTemplateInfo += `
                <button onclick="toggleReadingStatus(this)" class="btn-wide bg-pri">Read</button>
        `;
    } else {
        bookCardTemplateInfo += `
                <button onclick="toggleReadingStatus(this)" class="btn-wide bg-er">Read</button>
        `;
    }

    bookCardTemplateInfo += `
        <button onclick="removeBookCard(this)" class="btn-wide bg-n-3">Delete</button>
    </div>`;

    return bookCardTemplateInfo;
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

function toggleReadingStatus(event) {
    if (event.classList.contains('bg-pri')) {
        event.classList.remove('bg-pri');
        event.classList.add('bg-er');
    } else if (event.classList.contains('bg-er')) {
        event.classList.remove('bg-er');
        event.classList.add('bg-pri');
    }
}

window.loaded = showBooks();

function removeBookCard(obj) {
    obj.parentNode.remove();
}
