
// Make function that calculates Future Value

var age; 
var retirementAge;
var expense; 
var horizon; 

const ROR = .10;

function futureValueCalc(expense, ROR, horizon) {
    futureValue = expense * ((1 + ROR) ** horizon);
    futureValue = Number(futureValue.toFixed(2));
    futureValue = futureValue.toLocaleString();
    return futureValue;
}

// Make function that changes message text 

const nextButton = document.getElementById('nextButton');

let clickCount = 0; 

nextButton.addEventListener('click', function() {
    clickCount++;

    if (clickCount === 1) {
        age = document.getElementById('response').value;
        console.log(age);
        document.getElementById('message').innerText = 'At what age do you expect to retire?';
    } else if (clickCount === 2) {
        retirementAge = document.getElementById('response').value;
        console.log(retirementAge);
        document.getElementById('message').innerText = 'How much money did you just spend?';
        var dollarSign = document.getElementById('dollarSign');
        dollarSign.style.display = 'block';
        document.getElementById('nextButton').innerText = 'Shame me';
    } else if (clickCount === 3) {
        expense = document.getElementById('response').value;
        console.log(expense);
        horizon = retirementAge - age; 
        console.log(horizon);
        futureValueCalc(expense, ROR, horizon);
        var resultMessage = document.getElementById('resultMessage');
        document.getElementById('resultMessage').innerText = `If you had invested that $${expense}, it would have become $${futureValue} by the time you retired.`;
        resultMessage.style.display = 'block';
        clickCount = 0; 
    }
});


