// Get the <ul> element by its tag name
const ulElement = document.querySelector('ul');

// Use childNodes to list all the children
const children = ulElement.childNodes;

// Loop through and display the children
for (const child of children) {
  // Check if the child is an element (nodeType 1) to exclude text nodes
  if (child.nodeType === 1) {
    console.log(child.textContent);
  }
}