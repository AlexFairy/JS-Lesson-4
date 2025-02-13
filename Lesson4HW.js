//1. Exploring JavaScript Objects

//Task 1: Create a constructor function for the Book object with properties for title, author, and pages.

//Task 2: Implement a method within the Book object to display book information.

//Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

//Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

library = []

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
};

Book.prototype.DisplayInfo = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`)
}

function addNewBook (title, author, pages) {
    let addBook = new Book(title, author, pages);
    library.push(addBook);
    console.log(`The library just added ${title} written by: ${author} to our collection!`)
}

function findTitle(title) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title.toLowerCase() === title.toLowerCase()) {
            library[i].DisplayInfo;
            return;
        }
    }
    console.log(`Book not found in our system!`)
}

function findAuthor(author) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].author.toLowerCase() === author.toLowerCase()) {
            library[i].DisplayInfo;
            return;
        }
    }
    console.log(`Author not found in our system! We also do not sell any book by J.K. Rowling.`)
}

function filterOver100Pages() {
    let hundredPagesCount = library.filter(book => book.pages > 100);
    return hundredPagesCount;

}

function mapUse(){
    let updatedInfo = library.map(book => {
        return {
            ...book,
            title: "Title" + book.title,
            book:  "Book" + book.book
        }
    });
    return updatedInfo
}

let book1 = new Book("Tomorrow Will Be Different", "Sarah McBride", 288);
let book2 = new Book("Stonewall", "Martin Duberman", 432);
let book3 = new Book("Some Girls do", "Jennifer Dugan", 352);
let book4 = new Book("When Harry Became Sally", "Ryan T. Anderson", 232);
let book5 = new Book("Difficult Women", "Roxane Gay", 272);

console.log("Our weekly two book reccomendation!:")
book2.DisplayInfo();
book4.DisplayInfo();

addNewBook("The Cat I Never Named: A True Story of Love, War, and Survival", "AMRA SABIC-EL-RAYESS with Laura L. Sullivan", 384);

findAuthor("J.K Rowling")

let specific_search = filterOver100Pages();
for (let i = 0; i < library.length; i++) {
    library[i].DisplayInfo()
}

let updated_material = mapUse();
for (let i = 0; i < library.length; i++) {
    library[i].DisplayInfo()
}


//2. Exploring Objects and Math in JavaScript

//Task 1: Create a constructor function for the Account object with properties for accountNumber, balance, and owner.

//Task 2: Implement methods within the Account object to deposit and withdraw funds.

//Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.

let account_balance = []

function Bank(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
};

Bank.prototype.DisplayInfo = function() {
    console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}, Owner: ${this.owner}`)
}

Bank.prototype.deposit = function(add_funds) {
    if (add_funds > 0)
    account_balance.balance += add_funds;
    console.log(`Account holder ${this.owner} has deposited $${add_funds} into the account number ${this.accountNumber}.`)
    
}

Bank.prototype.withdrawals = function(take_funds) {
    if (account_balance > 0 && take_funds <= this.balance) {
        account_balance -= take_funds
        console.log(`Account holder ${this.owner} has withdrawn ${take_funds} from the account number ${this.accountNumber}`)
        console.log(`The current balance has been updated!`)
        console.log('Account in good standing!') 
    } else if (account_balance === 0) {
        console.log("You cannot withdrawl in an account that has below $0 balance!")
        console.log("A $45 fee will be applied in the upcoming billing cycle!\nHave a good day!")
    } else if (take_funds > account_balance) {
        console.log("Insufficient funds!")
        console.log("If this continues, the account will be subject to fines!")
    } else { 
        console.log("Invalid action!")
    }
}

Bank.prototype.CompoundInterest = function(r, y) {
    if (r > 0 && y > 0) {
        let i = this.balance * (1 + r) ** y - this.balance
        this.balance += i
        console.log(`Total interest $${i.toFixed(2)} for the account number ${this.accountNumber}. ${this.owner}'s balance is now $${this.balance}`)

      } else {
        console.log("Error!");
      }
    }

let account_holder1 = new Bank (34125, 4798.89, "Basilia Millian");
let account_holder2 = new Bank (75843, 12973.21, "Marisol Contreras");
let account_holder3 = new Bank (65481, 78176.34, "Alejandra de la Vega");
let account_holder4 = new Bank (73610, 91273, "Miguel Cardona");

account_holder1.DisplayInfo();
account_holder2.DisplayInfo();
account_holder4.DisplayInfo();

account_holder2.deposit(728);
account_holder4.deposit(210);
account_holder2.deposit(1500);

account_holder3.withdrawals(2700);
account_holder1.withdrawals(4500);

account_holder3.CompoundInterest(0.02, 3);
