const billInput = document.getElementById("bill");
const numPeopleInput = document.getElementById("people");
const theBill = document.getElementById("m");
const theBilltwo = document.getElementById("n");
const billInputm = document.querySelector(".bill_input");
const billinputn = document.querySelector(".number_input");
const resetButton = document.getElementById("reset");
const customTip = document.getElementById("custom");

function ifZero() {
  if (billInput.value === "") {
    theBill.classList.add("active");
    billInputm.classList.add("active");
    document.getElementById("tip").innerText = "0.00";
    document.getElementById("Total").innerText = "0.00";
  } else {
    theBill.classList.remove("active");
    billInputm.classList.remove("active");
  }
  if (numPeopleInput.value === "") {
    theBilltwo.classList.add("active");
    billinputn.classList.add("active");
    document.getElementById("tip").innerText = "0.00";
    document.getElementById("Total").innerText = "0.00";
  } else {
    theBilltwo.classList.remove("active");
    billinputn.classList.remove("active");
  }
}

function calculateTipOne() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value);
  const tip = bill * 0.05;
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = tipPerPerson * numPeople;

  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("Total").innerText = totalPerPerson.toFixed(2);
  ifZero();
}

function calculateTipTwo() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  const tip = bill * 0.1;
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = tipPerPerson * numPeople;

  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("Total").innerText = totalPerPerson.toFixed(2);
  ifZero();
}

function calculateTipThree() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  const tip = bill * 0.15;
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = tipPerPerson * numPeople;
  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("Total").innerText = totalPerPerson.toFixed(2);
  ifZero();
}

function calculateTipFour() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  const tip = bill * 0.25;
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = tipPerPerson * numPeople;
  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("Total").innerText = totalPerPerson.toFixed(2);
  ifZero();
}

function calculateTipFive() {
  const bill = parseFloat(billInput.value);
  const numPeople = parseInt(numPeopleInput.value);

  const tip = bill * 0.5;
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = tipPerPerson * numPeople;

  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("Total").innerText = totalPerPerson.toFixed(2);
  ifZero();
}

customTip.addEventListener("input", function () {
  const bill = parseFloat(billInput.value);
  const customTips = parseFloat(customTip.value / 100);
  const numPeople = parseInt(numPeopleInput.value);

  const tip = bill * customTips;
  const tipPerPerson = tip / numPeople;
  const totalPerPerson = tipPerPerson * numPeople;

  document.getElementById("tip").innerText = tipPerPerson.toFixed(2);
  document.getElementById("Total").innerText = totalPerPerson.toFixed(2);
  ifZero();
});

function reset() {
  billInput.value = "";
  numPeopleInput.value = "";
  document.getElementById("tip").innerText = "0.00";
  document.getElementById("Total").innerText = "0.00";
  theBill.classList.remove("active");
  billInputm.classList.remove("active");
  theBilltwo.classList.remove("active");
  billinputn.classList.remove("active");
}
