'use strict';
// variables
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li;

//Functions 
function inputLength() {
    return input.value.length;
}

function createNewLi() {
    li = document.createElement("li");
}

function addTextNodeInLi() {
    li.append(document.createTextNode(Capitalize()));
}

function insertLi() {
    ul.insertAdjacentElement("beforeend", li);
}

function resetInput() {
    input.value = "";
}
//Function Global
function createListElement() {
    createNewLi();
    addTextNodeInLi();
    insertLi();
    resetInput();
    symbolDelete();

}
//Function delete
function symbolDelete() {
    let deleteButton = document.createElement("button");
    let cross = document.createTextNode("\u00D7");
    span.className = "delete";
    span.append(cross);
    li.append(deleteButton);
}


//Functions validation add
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(key) {
    if (inputLength() > 0 && key.keyCode === 13) {
        createListElement();
    }
}

//function Text Style
function Capitalize() {
    return input.value[0].toUpperCase() + input.value.slice(1, inputLength()).toLowerCase();
}

// Processus
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
