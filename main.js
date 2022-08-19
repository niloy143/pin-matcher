// common variables which will be needed in multiple functions or events
const displayPin = document.getElementById('display-pin');
const pinInputField = document.getElementById('pin-input-field');
const successNotification = document.getElementById('success-notification');
const failureNotification = document.getElementById('failure-notification');

// generating 4 digit random PIN
function generatePin() {
    const randomNumber = (parseInt(Math.random() * 10000)).toString();
    if (randomNumber.length === 4) {
        return parseInt(randomNumber);
    }
    return generatePin();
}

// Generate PIN button event handler
document.getElementById('generate-pin').addEventListener('click', function () {
    displayPin.value = generatePin();
});

// ============================================

// PIN dialing buttons Event Handler
function inputButton(inputValue) {
    pinInputField.value += inputValue;
}

// clearing PIN input field button Event Handler 
function clearInputField() {
    pinInputField.value = '';
}

// slicing the last index button Event Handler
function sliceLastIndex() {
    const inputValue = pinInputField.value;
    pinInputField.value = inputValue.slice(0, inputValue.length - 1);
}

/* document.getElementById('buttons-body').addEventListener('click', function (event) {
    const buttonValue = event.target.innerText;
    const pinInputField = document.getElementById('pin-input-field');
    pinInputField.value += buttonValue;
    if (buttonValue === 'C') {
        pinInputField.value = '';
    }
    else if (buttonValue === '<') {
        const pinValue = pinInputField.value;
        pinInputField.value = pinValue.slice(0, pinValue.length - 2); // cutting last 2 index as '<' is always the last index.
    }
}); */

// =======================================================

// submit button Event Handler 
function submitButton() {
    const generatedPin = displayPin.value;
    const enteredPin = pinInputField.value;

    if (generatedPin === enteredPin) {
        successNotification.style.display = 'block';
        failureNotification.style.display = 'none';
    }
    else {
        successNotification.style.display = 'none';
        failureNotification.style.display = 'block';
    }
}