// Get the <ul> element
const ulElement = document.querySelector('ul');

// Use childNodes to list all the children from the <ul>
const childNodes = ulElement.childNodes;

// Create an array to store the list items
const listItems = [];

// Iterate over the child nodes
for (let i = 0; i < childNodes.length; i++) {
  const child = childNodes[i];

  // Use a condition to only iterate over element nodes
  if (child.nodeType === 1) {
    listItems.push(child);
    // Find the element that contains "Fast and Furious"
    if (child.textContent.includes("Fast and Furious")) {
      // If it's not the first element, move it to the top of the list
      if (i > 0) {
        ulElement.insertBefore(child, ulElement.firstElementChild);
      }
      // Add a class .important to the element
      child.classList.add('important');
    }
    // Add an eventListener on every item of the list
    child.addEventListener('click', function () {
      // If the clicked item is "Fast and Furious", show a special message
      if (child.textContent.includes("Fast and Furious")) {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about cars, it's about family.");
      } else {
        // Otherwise, display the name of the clicked element
        alert(child.textContent);
      }
    });
  }
}

// Remove duplicates using removeChild
const uniqueListItems = listItems.filter((item, index) => listItems.indexOf(item) === index);
ulElement.innerHTML = '';
uniqueListItems.forEach((item) => ulElement.appendChild(item));

// Add an eventListener on the document body for keyup
document.body.addEventListener('keyup', (event) => {
  // Check if the key pressed is 'r'
  if (event.key === 'r') {
    // Sort the list in random order, but ensure "Fast and Furious" is the first element
    ulElement.innerHTML = ''; // Clear the list
    uniqueListItems.sort(() => Math.random() - 0.5); // Shuffle the list
    ulElement.appendChild(listItems.find((item) => item.textContent.includes("Fast and Furious"))); // Ensure "Fast and Furious" is first
    uniqueListItems.forEach((item) => ulElement.appendChild(item));
  }
});