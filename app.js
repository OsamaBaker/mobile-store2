let allMobiles = []

// Constructor function
function Mobile(name, type){
  this.name = name,
  this.type = type,
  this.price = [],
  this.condition = [],

  allMobiles.push(this),
  settingItem();
}

// Random price generator
Mobile.prototype.getRndPrice = function () {
  this.price.push(Math.floor(Math.random() * (500 - 100) ) + 100);
}

// Condition declaration function
Mobile.prototype.declareCondition = function () {
  if(this.price < 200){
    this.condition.push('Old');
  } else {
    this.condition.push('New');
  }
}

// get result div to that will render the input
const resultDiv = document.getElementById('resultDiv');

// get form
const form = document.getElementById('form');

// adding event listener to the form
form.addEventListener('submit', submitter);

function submitter (event) {
  event.preventDefault();

  let name = event.target.username.value;
  let type = event.target.type.value;

  let newInstance = new Mobile(name, type);
  newInstance.getRndPrice();
  newInstance.declareCondition();

  newInstance.render();

}

function settingItem(){
  let setArr = JSON.stringify(allMobiles)
  localStorage.setItem('mobile', setArr)
}


//creating render table
const table = document.createElement('table');
resultDiv.appendChild(table);

const headerRow = document.createElement('tr');
table.appendChild(headerRow);

const firstTh = document.createElement('th');
headerRow.appendChild(firstTh);
firstTh.textContent = 'Username';

const secondTh = document.createElement('th');
headerRow.appendChild(secondTh);
secondTh.textContent = 'Type';

const thirdTh = document.createElement('th');
headerRow.appendChild(thirdTh);
thirdTh.textContent = 'Price';

const fourthTh = document.createElement('th');
headerRow.appendChild(fourthTh);
fourthTh.textContent = 'Condition';

// Render function
Mobile.prototype.render = function () {
  
  let firstRow = document.createElement('tr');
  table.appendChild(firstRow);
  // console.log(firstRow)

  let rowFirstTd = document.createElement('td');
  firstRow.appendChild(rowFirstTd);

  let rowSecondTd = document.createElement('td');
  firstRow.appendChild(rowSecondTd);

  let rowThirdTd = document.createElement('td');
  firstRow.appendChild(rowThirdTd);

  let rowFourthTd = document.createElement('td');
  firstRow.appendChild(rowFourthTd);

  for(let i = 0; i < allMobiles.length; i++){

    rowFirstTd.textContent = this.name;
    rowSecondTd.textContent = this.type;
    rowThirdTd.textContent = this.price;
    rowFourthTd.textContent = this.condition;
  }

}

function gettingItem() {
  let data = localStorage.getItem('mobile');
  let getArr = JSON.parse(data);

  if (getArr) {
      for (let i = 0; i < getArr.length; i++) {
          new Mobile(getArr[i].name, getArr[i].type);
      }
  }
}

gettingItem();

for (let i = 0; i < allMobiles.length; i++) {
  
  allMobiles[i].render();
}
