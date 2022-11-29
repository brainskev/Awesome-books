import Store from './modules/store.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/date.js';

class Book {
  constructor(title, author, id = Math.floor(Math.random() * 1000000)) {
    this.title = title;
    this.author = author;
    this.id = id;
  }
}

// EVENT TO DISPLAY BOOKS
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// EVENT TO ADD A BOOK
document.querySelector('.bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  // get form values
  const titleInput = document.querySelector('.title').value;
  const authorInput = document.querySelector('.author').value;
  if (titleInput !== '' && authorInput !== '') {
    const book = new Book(titleInput, authorInput);
    UI.addBookToList(book);
    Store.addBook(book);
    UI.clearFields();
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter book tile and author');
  }
});
// EVENT DELETE
document.querySelector('.books').addEventListener('click', (e) => {
  if (e.target.className === 'delete') {
    const id = e.target.previousElementSibling.innerText;
    Store.removeBook(id);
    UI.deleteBook(e.target);
  }
});

