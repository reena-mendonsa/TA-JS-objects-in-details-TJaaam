// object-oriented booklist

class Book {
    constructor(title, category, author) {
      this.title = title;
      this.category = category;
      this.author = author;
      this.isRead = false;
      this.finishedDate = null;
    }
    markBookAsRead() {
      this.isRead = true;
      this.finishedDate = Date.now();
    }
  }
  
  
    // booklist
  
  class Booklist {
    constructor() {
      this.AllBooks = [];
      this.index = 0;
    }
    add(arr = []) {
      this.AllBooks = this.AllBooks.concat(arr);
      return this.AllBooks;
    }
    getCurrentBook() {
      return this.AllBooks[this.index];
    }
    getNextBook() {
      return this.AllBooks[this.index + 1];
    }
    getPrevBook() {
      return this.AllBooks[this.index - 1];
    }
    changeCurrentBook(num) {
      this.index = num;
    }
  }
  
  let book1 = new Book("The Haunted Howl", "Mystery", "Eric Luper");
  
  let book2 = new Book("The Land Of Magic Medicines", "Fantasy", "Enid Blyton");
  let book3 = new Book("The Enormous Crocodile", "Fantasy", "Roald Dahl");
  let book4 = new Book("Demon Dentist", "Funny", "David Walliams");
  let book5 = new Book("Insect Invasion", "Detective", "Geronimo Stilton");
  
  let library = new Booklist();
  
  library.add([book1, book2, book3, book4, book5]);