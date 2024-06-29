// start with given code

const myLibrary = [];

function Book(name, author, pageQuantity, readingStatus = false) {
  
  this.name = name;
  this.author = author;
  this.pageQuantity = pageQuantity;
  this.readingStatus = readingStatus;
  // lets declare new book are unread by default

  let book = {
    name: name,
    author: author,
    pageQuantity: pageQuantity,
    readingStatus: readingStatus,
  }
  
  return book 
  //aparently i might not need to return a book object but it fails if i remove it
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}

//add book with msg
let button = document.getElementById("button");
button.addEventListener("click", ()=> {
  console.log("button clicked");

  //promtp mode
  var name = prompt("Name of the book");
  var author = prompt("Name of the author");
  var pageQuantity = prompt("number of pages");
  var readingStatus = confirm("Did you read it ?")

  let promptBook = Book(name, author, pageQuantity, readingStatus);
  addBookToLibrary(promptBook);
  console.log(myLibrary);
  DisplayLibrary();
                      
}
)



// display library in html using the list
function DisplayLibrary() {
  let list = document.getElementById("list");
  //nead to clear current list
  list.innerHTML = '';

  

  myLibrary.forEach((book, index) => {

    const bookLine = document.createElement("li");

    let status = book.readingStatus ? "read" : "not read";
    bookLine.innerHTML = 
    `
    <p><b>${book.name}</b>, by ${book.author}, ${book.pageQuantity} pages, ${status}, </p>
    <button id="read${index}">Read/Unread</button>
    <button id="delete${index}">Delete</button>
    `;

    list.appendChild(bookLine);

    const readButton = document.getElementById(`read${index}`);
    readButton.addEventListener("click", () => ChangeStatus(index));

    const deleteButton = document.getElementById(`delete${index}`);
    deleteButton.addEventListener("click", () => Delete(index));


    

  })

  
}


//function to change status
function ChangeStatus(index) {
  myLibrary[index].readingStatus = !myLibrary[index].readingStatus;
  DisplayLibrary(); 
}



//function to delete
function Delete(index) {
  myLibrary.splice(index, 1);
  DisplayLibrary();  
}

let formSubmit = document.getElementById("bookForm");
formSubmit.addEventListener("submit",  function(event) {
  event.preventDefault(); 
  if (this.checkValidity()) {
      form(); 
  }
});
  
  



//funtction for form
function form() {
  console.log("clicked");

  //form mode
  var name = valueOfID('name');
  var author = valueOfID('author');
  var pageQuantity = valueOfID('pages');

  var readingStatus = document.getElementById('readStatus').checked;


  let formBook = Book(name, author, pageQuantity, readingStatus);
  addBookToLibrary(formBook);
  console.log(myLibrary);
  DisplayLibrary();

  document.getElementById("bookForm").reset();

}

function valueOfID(id) {
  let target = document.getElementById(id);
  let value = target.value;
  return value
}
