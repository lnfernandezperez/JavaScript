let addButtons = document.querySelectorAll(".button1");
let inputs = document.querySelectorAll(".input1");
let uls = document.querySelectorAll(".listt");


function createNewItemInList(text) {
  let element = document.createElement("li");
  let input = document.createElement("input");
  let button = 
  element.append(input);
  input.type = "checkbox";
  element.innerHTML += text;
  element.append(button);
  return element;
}

uls.forEach(function (ul, index) {
  buttons[index].addEventListener("click", function () {
    ul.append(createNewItemInList(inputs[index].value));
  });
});

let buttonsClear = document.querySelectorAll(".remove")

function removeItemInList(){
    let buttonClear = document.remove
}