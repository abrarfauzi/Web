const display=document.getElementById('display');
var secondFunction = false;
var memory = 0;

function clearMemory() {
   memory = 0;
}

function recallMemory() {
   document.getElementById('display').value = memory;
  }

function addToMemory() {
    var currentValue = parseFloat(document.getElementById('display').value);
     if (!isNaN(currentValue)) {
     memory += currentValue;
    }
}

function subtractFromMemory() {
  var currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
  memory -= currentValue;
  }
}

function storeInMemory() {
  var currentValue = parseFloat(document.getElementById('display').value);
  if (!isNaN(currentValue)) {
  memory = currentValue;
  }  
}

function addToDisplay(value) {
  if (secondFunction) {
    value = value + 'Math.';
    secondFunction = false;
  }
  document.getElementById('display').value += value;
}

function removeLastCharacter() {
  var currentDisplay = document.getElementById('display').value;
  document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function logFunction() {
  var value = parseFloat(document.getElementById('display').value);
  if (isNaN(value) || value <= 0) {
    document.getElementById('display').value = 'Error';
    return;
  }

  document.getElementById('display').value = Math.log10(value);
}
 
function toggleSecondFunction() {
    secondFunction = false;
}

function sqrtFunction() {
 var value = parseFloat(document.getElementById('display').value);
  if (isNaN(value) || value < 0) {
    document.getElementById('display').value = 'Error';
    return;
 }

  document.getElementById('display').value = Math.sqrt(value);
}

function toggleSign() {
 var currentDisplay = document.getElementById('display').value;
  if (currentDisplay !== '' && currentDisplay !== 'Error') {
  if (currentDisplay.charAt(0) === '-') {
   document.getElementById('display').value = currentDisplay.slice(1);
  } else {
   document.getElementById('display').value = '-' + currentDisplay;
  }
  }
 }

function factorial() {
  var value = parseFloat(document.getElementById('display').value);
  if (isNaN(value) || value < 0 || !Number.isInteger(value)) {
    document.getElementById('display').value = 'Error';
    return;
  }

 

  var result = 1;
  for (var i = 2; i <= value; i++) {
    result *= i;
  }

  document.getElementById('display').value = result;
}


