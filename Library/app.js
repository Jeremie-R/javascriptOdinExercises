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
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}

//add book with msg
let button = document.getElementById("button");
button.addEventListener("click", ()=> {
  console.log("button clicked");
  console.log(trialBook);

  //promtp mode
  var name = prompt("Name of the book");
  var author = prompt("Name of the author");
  var pageQuantity = prompt("number of pages");
  var readingStatus = confirm("Did you read it ?")

  let promptBook = Book(name, author, pageQuantity, readingStatus);
  addBookToLibrary(promptBook);
  console.log(myLibrary);
                      
}
)



// display library in html using the list
function DisplayLibrary() {
  let list = document.getElementById("list");

  myLibrary.forEach(book => {
    console.log("hot");
    const bookLine = document.createElement("li");

    let status = if(book.status == true){"read"}else{"not read"};
      

    bookLine.innerHTML =
      "
      <p><b>${book.name}</b>, by ${book.author}, ${book.pageQuantity}, ${status} </p>
      "
  })

  
}


//function to change status

//function to delete