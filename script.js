'use strict'
// variables
let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let li;

//Functions
function inputLength() {
    return input.value.length;
}

function resetInput() {
    input.value = "";
}

function addTextNode() {
    li.append(document.createTextNode(CapitalizeFirstLetterInput()));
}
function createNewLi() {
    li = document.createElement("li");
}

function insertLi() {
    ul.insertAdjacentElement("beforeend", li);
}

function createListElement() {
    createNewLi();
    addTextNode();
    insertLi();
    resetInput();
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeyPress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

function CapitalizeFirstLetterInput() {
    return input.value[0].toUpperCase() + input.value.slice(1, inputLength()).toLowerCase();
}
// Processus
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
