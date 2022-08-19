// common variables which will be needed in multiple functions or events
const displayPin = document.getElementById('display-pin');
const pinInputField = document.getElementById('pin-input-field');
const successNotification = document.getElementById('success-notification');
const failureNotification = document.getElementById('failure-notification');
const scammerDetected = document.getElementById('scammer-detected');
const trial = document.getElementById('trial');
let trialLeft;

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
    pinInputField.value = '';
    trial.innerText = '3';
    successNotification.style.display = 'none';
    failureNotification.style.display = 'none';
    scammerDetected.style.display = 'none';
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

// =======================================================

// submit button Event Handler 
function submitButton() {
    if (pinInputField.value !== '' && displayPin.value !== '') {
        const generatedPin = displayPin.value;
        const enteredPin = pinInputField.value;
        trialLeft = parseInt(trial.innerText)

        if (generatedPin === enteredPin) {
            successNotification.style.display = 'block';
            failureNotification.style.display = 'none';
            displayPin.value = '';
        }
        else {
            trialLeft--;
            successNotification.style.display = 'none';
            failureNotification.style.display = 'block';
            trial.innerText = trialLeft;
            if (trialLeft === 0) {
                displayPin.value = '';
                pinInputField.value = '';
                scammerDetected.style.display = 'block';
                failureNotification.style.display = 'none';
            }
        }

        pinInputField.value = '';
    }

}