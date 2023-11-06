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