const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = read;


}

function addBookToLibrary(author, title, pages, read) {

    let storedBooks = new Book(author, title, pages, read);

    myLibrary.push(storedBooks);



}

addBookToLibrary("J.K. Rowling", "Harry Potter and the Philosopher's Stone", 223, true);
addBookToLibrary("J.K. Rowling", "Harry Potter and the Chamber of Secrets", 251, true);
addBookToLibrary("J.K. Rowling", "Harry Potter and the Prisoner of Azkaban", 317, false);
addBookToLibrary("J.K. Rowling", "Harry Potter and the Goblet of Fire", 636, true);

function loopThroughBooks(arr) {



    let bookDisplayContainer = document.querySelector('.bookDisplayContainer');

    for (let i = 0; i < arr.length; i++) {

        let card = document.createElement('div'); 

        let titleElement = document.createElement('p');
        titleElement.textContent = "Title: " + arr[i].title;

        card.append(titleElement)

        let authorElement = document.createElement('p');
        authorElement.textContent= "Author: " + arr[i].author;

        card.append(authorElement);

        let pagesElement = document.createElement('p');
        pagesElement.textContent = "Pages: " + arr[i].pages;

        card.append(pagesElement);

        let readElement = document.createElement('p');
        readElement.textContent = "Read: " + arr[i].read;

        card.append(readElement);

        bookDisplayContainer.append(card);





    };



}

loopThroughBooks(myLibrary);