// Get the <ul> element
const ulElement = document.querySelector('ul');

// Get the <body> element
const bodyElement = document.body;

// Function to display an alert based on the clicked item
const showAlert = (text) => {
  if (text.includes("Fast and Furious")) {
    alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about cars; it's about family.");
  } else {
    alert(text);
  }
};

// Function to shuffle the list randomly, keeping Fast and Furious at the top
const shuffleList = () => {
  const children = Array.from(ulElement.children);

  // Find the Fast and Furious element
  const fastAndFuriousElement = children.find((el) => el.textContent.includes("Fast and Furious"));

  // Remove duplicates
  const uniqueElements = new Set();

  ulElement.innerHTML = ""; // Clear the list

  if (fastAndFuriousElement) {
    ulElement.appendChild(fastAndFuriousElement); // Add Fast and Furious first
  }

  children.forEach((child) => {
    if (child.nodeType === 1 && !uniqueElements.has(child.textContent)) {
      ulElement.appendChild(child);
      uniqueElements.add(child.textContent);
      child.addEventListener('click', () => showAlert(child.textContent));
    }
  });
};

// Add a keyup listener on the document body
bodyElement.addEventListener('keyup', (event) => {
  if (event.key === 'r') {
    shuffleList(); // Sort the list randomly
  }
  if (event.key === 'd') {
    // Clone Fast and Furious
    const fastAndFuriousElement = ulElement.querySelector('.important');
    if (fastAndFuriousElement) {
      const clonedElement = fastAndFuriousElement.cloneNode(true);
      ulElement.appendChild(clonedElement);
      clonedElement.addEventListener('click', () => showAlert(clonedElement.textContent));
    }
  }
});

// Create a new <div> before the list
const divElement = document.createElement('div');
ulElement.parentNode.insertBefore(divElement, ulElement);

// Create a <select> with two <option> elements
const selectElement = document.createElement('select');
const option1 = document.createElement('option');
option1.value = "important";
option1.textContent = "Important franchises";
const option2 = document.createElement('option');
option2.value = "normal";
option2.textContent = "Normal franchises";
selectElement.appendChild(option1);
selectElement.appendChild(option2);
divElement.appendChild(selectElement);

// Add an event listener to the <select> for visibility control
selectElement.addEventListener('change', () => {
  const selectedValue = selectElement.value;
  const listItems = ulElement.children;

  for (let i = 0; i < listItems.length; i++) {
    const listItem = listItems[i];

    if (selectedValue === "important" && listItem.classList.contains("important")) {
      listItem.style.visibility = "visible";
    } else if (selectedValue === "normal") {
      listItem.style.visibility = "visible";
    } else {
      listItem.style.visibility = "hidden";
    }
  }
});