
// import Store from './store.js';

export default class UI {
  static displayBooks() {
    const storedBooks = [
        {
            title: 'book one',
            author: 'kelvin kaviku',
        }
    ];

    const books = storedBooks;
// Store.getBooks();
// //     books.forEach((book) => UI.addBookToList(book));
// //  
 }

 console.log(storedBooks);

  static addBookToList(book) {
    const books = document.querySelector('.books');
    const newBook = document.createElement('tr');
    newBook.innerHTML = `
    <tr>${book.title}</tr>
    <tr>${book.author}</tr>
    <button class="remove ${id}">Remove</button><hr>
     `;
    books.appendChild(newBook);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('.title').value = '';
    document.querySelector('.author').value = '';
  }
}
