// Make function that changes message text 

const nextButton = document.getElementById('nextButton');

let clickCount = 0; 

nextButton.addEventListener('click', function() {
    clickCount++;

    if (clickCount === 1) {
        document.getElementById('message').innerText = 'At what age do you expect to retire?';
    } else if (clickCount === 2) {
        document.getElementById('message').innerText = 'How much money did you just spend?';
        document.getElementById('nextButton').innerText = 'Shame me';
        clickCount = 0; 
    }
});


// Make function that changes button text