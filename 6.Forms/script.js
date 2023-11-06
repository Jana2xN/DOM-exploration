/*
*/
// Get the input and span elements
const firstNameInput = document.getElementById('firstname');
const displayFirstName = document.getElementById('display-firstname');

// Add a keyup event listener to the input field
firstNameInput.addEventListener('keyup', () => {
  // Update the content of the span with the input value
  displayFirstName.textContent = firstNameInput.value;
});

// Get the age input and the a-hard-truth section
const ageInput = document.getElementById('age');
const aHardTruthSection = document.getElementById('a-hard-truth');

// Add a keyup event listener to the age input
ageInput.addEventListener('keyup', () => {
  // Get the value of the age input and convert it to a number
  const age = parseInt(ageInput.value, 10);

  // Check if age is below 18
  if (age < 18) {
    // Hide the a-hard-truth section
    aHardTruthSection.style.visibility = 'hidden';
  } else {
    // Show the a-hard-truth section
    aHardTruthSection.style.visibility = 'visible';
  }
});