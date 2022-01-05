const UNCOMPLETED_LIST_BOOK_ID = "incompleteBookshelfList";
const COMPLETED_LIST_BOOK_ID = "completeBookshelfList";
const BOOK_ITEMID = "itemId";

function addBook(){

    const checkBox = document.getElementById("inputBookIsComplete");
    if(checkBox.checked == true){
        const completedBOOKList = document.getElementById(COMPLETED_LIST_BOOK_ID);

            const bookTitle = document.getElementById("inputBookTitle").value;
            const bookAuthor = document.getElementById("inputBookAuthor").value;
            const bookYear = document.getElementById("inputBookYear").value;

            const book = makeBook(bookTitle, bookAuthor, bookYear, true);
            const bookObject = composeBookObject(bookTitle, bookAuthor, bookYear, true);

            book[BOOK_ITEMID] = bookObject.id;
            books.push(bookObject);

            alert("Successfully!")
            completedBOOKList.append(book);
            updateDataToStorage();
    } else {
        const uncompletedBOOKList = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);

            const bookTitle = document.getElementById("inputBookTitle").value;
            const bookAuthor = document.getElementById("inputBookAuthor").value;
            const bookYear = document.getElementById("inputBookYear").value;

            const book = makeBook(bookTitle, bookAuthor, bookYear, false);
            const bookObject = composeBookObject(bookTitle, bookAuthor, bookYear, false);

            book[BOOK_ITEMID] = bookObject.id;
            books.push(bookObject);

            alert("Successfully!")
            uncompletedBOOKList.append(book);
            updateDataToStorage();
    }
}

// create container
function makeBook(title, author, year, isCompleted){

    const bookTitle = document.createElement("h2");
    bookTitle.innerText = title;

    const bookAuthor = document.createElement("p");
    bookAuthor.innerText = author;

    const bookYear = document.createElement("small");
    bookYear.innerText = year;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner")
    textContainer.append(bookTitle, bookAuthor, bookYear);

    const container = document.createElement("div");
    container.classList.add("item", "shadow")
    container.append(textContainer);

    if (isCompleted) {
        container.append(
            createUndoButton(),
            createTrashButton()
        );
    } else {
        container.append(
            createCheckButton(),
            createTrashButton()
        );
    }

    return container;
}

// create button
function createButton(buttonTypeClass, eventListener) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    button.addEventListener("click", function (event) {
        eventListener(event);
        event.stopPropagation();
    });
    return button;
}

function addTaskToCompleted(taskElement) {
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskAuthor = taskElement.querySelector(".inner > p").innerText;
    const taskYear = taskElement.querySelector(".inner > small").innerText;

    const newBook = makeBook(taskTitle, taskAuthor, taskYear, true);
    const book = findBook(taskElement[BOOK_ITEMID]);
    book.isCompleted = true;
    newBook[BOOK_ITEMID] = book.id;

    const listCompleted = document.getElementById(COMPLETED_LIST_BOOK_ID);
    listCompleted.append(newBook);

    taskElement.remove();

    updateDataToStorage();
} 

function undoTaskFromCompleted(taskElement){
    const listUncompleted = document.getElementById(UNCOMPLETED_LIST_BOOK_ID);
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskAuthor = taskElement.querySelector(".inner > p").innerText;
    const taskYear = taskElement.querySelector(".inner > small").innerText;
 
    const newBook = makeBook(taskTitle, taskAuthor, taskYear, false);

    const book = findBook(taskElement[BOOK_ITEMID]);
    book.isCompleted = false;
    newBook[BOOK_ITEMID] = book.id;
 
    listUncompleted.append(newBook);
    taskElement.remove();

    updateDataToStorage();
}

function removeTaskFromCompleted(taskElement){

    const bookPosition = findBookIndex(taskElement[BOOK_ITEMID]);
    books.splice(bookPosition, 1);
    taskElement.remove();
    updateDataToStorage();
}

// check button
function createCheckButton() {
    return createButton("check-button", function (event) {
        addTaskToCompleted(event.target.parentElement);
    });
}

// trash button
function createTrashButton() {
    return createButton("trash-button", function (event) {
        let del;
        let r = confirm("Yakin, hapus buku?");
        if (r == true) {
        del = "OK!";
        removeTaskFromCompleted(event.target.parentElement);
        } else {
        del = "Cancel!";
        } 
    });
}

// undo button
function createUndoButton(){
    return createButton("undo-button", function(event){
        undoTaskFromCompleted(event.target.parentElement);
    });
}