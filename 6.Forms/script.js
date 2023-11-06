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

// Get the password and password confirmation input fields
const passwordInput = document.getElementById('pwd');
const passwordConfirmInput = document.getElementById('pwd-confirm');

// Add a keyup event listener to the password input
passwordInput.addEventListener('keyup', () => {
  const password = passwordInput.value;
  
  // Check if the password is too short (less than 6 characters)
  if (password.length < 6) {
    passwordInput.style.borderColor = 'red';
  } else {
    passwordInput.style.borderColor = ''; // Reset the border color
  }
});

// Add a keyup event listener to the password confirmation input
passwordConfirmInput.addEventListener('keyup', () => {
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;
  
  // Check if the password and confirmation do not match
  if (password !== passwordConfirm) {
    passwordInput.style.borderColor = 'red';
    passwordConfirmInput.style.borderColor = 'red';
  } else {
    passwordInput.style.borderColor = ''; // Reset the border color
    passwordConfirmInput.style.borderColor = ''; // Reset the border color
  }
});
