let names = [];
let input;
let nameList;

function setup() {
  let canvas = createCanvas(400, 200);
  canvas.style('display', 'none');

  input = select("#name-input");
  nameList = select("#name-list");

  textAlign(CENTER);
  textSize(24);
}

function addNames() {
  let inputNames = input.value();
  if (inputNames !== "") {
    names = inputNames.split(keyCode).map(name => name.trim());
    input.value(event.keyCode == 13);
    displayNames();
  }
}

function displayNames() {
  shuffle(names, true);
  nameList.html("");

  for (let i = 0; i < names.length; i++) {
    let listItem = createElement("li", `${i + 1}. ${names[i]}`);
    listItem.parent(nameList);
  }
}



