
// Make function that calculates Future Value

var age; 
var retirementAge;
var expense; 

const ROR = .10;

def future_value_calc(expense, ROR, horizon): 
    future_value = expense * ((1 + ROR) ** horizon)
    return future_value
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
        console.log(age);
        console.log(retirementAge);
        document.getElementById('message').innerText = 'How much money did you just spend?';
        document.getElementById('nextButton').innerText = 'Shame me';
    } else if (clickCount === 3) {
        expense = document.getElementById('response').value;
        console.log(age);
        console.log(retirementAge);
        console.log(expense);
        var resultMessage = document.getElementById('resultMessage');
        resultMessage.style.display = 'block';
        clickCount = 0; 
    }
});


