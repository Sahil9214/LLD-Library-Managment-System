class Book {
  #availability;
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.#availability = true; // Initially set to true
  }
  get isAvailable() {
    return this.#availability;
  }
  set isAvailable(bool) {
    this.#availability = bool;
  }
}

class Member {
  constructor(memberId, name, contactInformation) {
    this.memberId = memberId;
    this.name = name;
    this.contactInformation = contactInformation;
    this.borrowedBooks = [];
  }
}

class Librarian {
  constructor(name, contactInformation) {
    this.name = name;
    this.contactInformation = contactInformation;
  }
  issueBook(member, book) {
    if (book.isAvailable) {
      member.borrowedBooks.push(book);
      book.isAvailable = false;
      console.log(`Book "${book.title}" issued to ${member.name}`);
    } else {
      console.log(`Book "${book.title}" is not available for issue.`);
    }
  }
  returnBook(member, book) {
    const index = member.borrowedBooks.indexOf(book);
    if (index !== -1) {
      member.borrowedBooks.splice(index, 1);
      book.isAvailable = true;
      console.log(`Book "${book.title}" returned by ${member.name}`);
    } else {
      console.log(`Book "${book.title}" is not borrowed by ${member.name}`);
    }
  }
}

class Library {
  constructor(name, address, contactInformation) {
    this.name = name;
    this.address = address;
    this.contactInformation = contactInformation;
    this.librarians = [];
    this.members = [];
    this.books = [];
  }
  addLibrarian(librarian) {
    this.librarians.push(librarian);
  }
  addMember(member) {
    this.members.push(member);
  }
  addBook(book) {
    this.books.push(book);
  }
}

// Usage
const library = new Library(
  "NeuralHq.ai",
  "Bion Advisor Centural century karnataka bangluru 560002",
  "92919189989"
);

const librarian = new Librarian("Sandeep", "9019029034");
library.addLibrarian(librarian);

const member = new Member("2", "Utkarsh", "9214553881");
const member1 = new Member("2", "chinaa", "92145539991");
library.addMember(member);
library.addMember(member1);

const book1 = new Book(
  "The Great Gatsby",
  "F. Scott Fitzgerald",
  "Classic Literature"
);
const book2 = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  "Classic Literature"
);

library.addBook(book1);
library.addBook(book2);

console.log("Library:", library);

// Librarian issuing a book to a member
librarian.issueBook(member, book1);

// Librarian attempting to issue an already borrowed book
librarian.issueBook(member, book1);

// Member returning a book to the library
librarian.returnBook(member, book1);

// Member attempting to return a book they haven't borrowed
librarian.returnBook(member, book1);

console.log("Library after issuing and returning books:", library);
