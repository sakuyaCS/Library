const myLibrary = [];

function Book(author, title, pages, read) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.id = crypto.randomUUID();
    this.read = read;


}

Book.prototype.readStatus = function() {
    this.read = !this.read;
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

    bookDisplayContainer.innerHTML="";

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

        card.classList.add('bookCards');

        const currentBookId = arr[i].id;

        let removeBtn = document.createElement("button");

        removeBtn.textContent = "Remove";

        card.append(removeBtn);

        let toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read"
        card.append(toggleBtn);

        toggleBtn.addEventListener('click', () => {
            let findBook = myLibrary.find(book => book.id === currentBookId);
            findBook.readStatus();

            loopThroughBooks(myLibrary);

        });

        removeBtn.addEventListener('click', () => {
            /* findIndex returns -1 if no item passes test, otherwise returns `true` */
            let indexRemoval = myLibrary.findIndex(book => book.id === currentBookId);
            if (indexRemoval > -1) {
                myLibrary.splice(indexRemoval, 1);
            }

            loopThroughBooks(myLibrary);



        });





  

    
    };



}

loopThroughBooks(myLibrary);

const addBookBtn = document.getElementById("addBookBtn");
const bookDialogRef= document.getElementById("bookDialog");
const cancelBtn = document.getElementById("cancelBtn");
const bookForm = document.getElementById("bookForm");

addBookBtn.addEventListener('click', () => { 

    bookDialogRef.showModal();

});

cancelBtn.addEventListener('click', () => {

    bookDialogRef.close();
});

bookForm.addEventListener('submit', (event) => {
    event.preventDefault(); /* prevent page reload */
    let authorVal = document.getElementById('author').value;
    let pagesVal = document.getElementById('pages').value;
    let titleVal = document.getElementById('title').value;
    let readVal = document.getElementById('readInput').checked;

    addBookToLibrary(authorVal, titleVal, pagesVal, readVal);
    bookDialogRef.close();

    loopThroughBooks(myLibrary);

});







