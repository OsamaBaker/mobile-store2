Mobile.all = [];
let price = 0;
let condition = undefined;

// Constructor Object
function Mobile(name, type) {
  (this.name = name), (this.type = type),(this.price = getRndPrice(100,500)) , Mobile.all.push(this);
}

function getRndPrice(min, max) {
    return Math.floor(Math.random() * (500 - 100) ) + 100;
  }






// Getting input fields and submit button by ID and form
const form = document.getElementById("form");

// Adding event listener to the submit button
form.addEventListener("submit", submitter);

// Submitter Function
function submitter(event) {
  event.preventDefault();

  let username = event.target.username.value;
  let type = event.target.type.value;

  

  const newMobile = new Mobile(username, type);

  localStorage.setItem("mobile", JSON.stringify(Mobile.all));

  render();

}

// getting render region by id
const renderRegion = document.getElementById("renderRegion");

// creating render table and appending it to renderRegion
const table = document.createElement("table");
renderRegion.appendChild(table);

let headerRow = document.createElement("tr");
table.appendChild(headerRow);

let firstTh = document.createElement("th");
headerRow.appendChild(firstTh);
firstTh.textContent = "UserName";

let secondTh = document.createElement("th");
headerRow.appendChild(secondTh);
secondTh.textContent = "Type";

let thirdTh = document.createElement("th");
headerRow.appendChild(thirdTh);
thirdTh.textContent = "Price";

let fourthTh = document.createElement("th");
headerRow.appendChild(fourthTh);
fourthTh.textContent = "Condition";

function render() {
    
  let dataArray = [];
  dataArray = JSON.parse(localStorage.getItem("mobile"));


  for (let i = 0; i < dataArray.length; i++) {
  
    let firstRow = document.createElement("tr");
    table.appendChild(firstRow);

    let firstTd = document.createElement("td");
    firstRow.appendChild(firstTd);

    firstTd.textContent = `${dataArray[i].name}`;

    let secondTd = document.createElement('tr')
    firstRow.appendChild(secondTd)
    secondTd.textContent = `${dataArray[i].type}`

    let thirdTd = document.createElement('td');
    firstRow.appendChild(thirdTd);
    thirdTd.textContent = `${dataArray[i].price}`
    
  }
}

if (localStorage.getItem("mobile")) {
  Mobile.all = JSON.parse(localStorage.getItem("mobile"));
  render();
}

