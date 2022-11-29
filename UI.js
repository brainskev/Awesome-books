
// import Store from './store.js';

 class UI {
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
console.log(storedBooks);
 }



  static addBookToList(book) {
    const books = document.querySelector('.books');
    const newBook = document.createElement('div');
    newBook.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <button class="remove ${book.id}">Remove</button><hr>
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
