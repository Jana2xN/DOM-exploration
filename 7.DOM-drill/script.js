document.addEventListener("DOMContentLoaded", function () {
    const ul = document.querySelector("ul");
  
    // Create an array to store the unique franchises
    const uniqueFranchises = [];
  
    // Iterate over child nodes of the <ul> element
    for (let i = 0; i < ul.childNodes.length; i++) {
      const child = ul.childNodes[i];
  
      // Check if the child is an element node
      if (child.nodeType === 1) {
        // Check if the text content of the child already exists in the uniqueFranchises array
        if (uniqueFranchises.includes(child.textContent)) {
          // If it's a duplicate, remove it
          ul.removeChild(child);
        } else {
          // Add it to the uniqueFranchises array
          uniqueFranchises.push(child.textContent);
  
          // Add a click event listener to each list item
          child.addEventListener("click", function () {
            if (child.textContent === "Fast and Furious") {
              alert(
                "The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about cars, it's about family."
              );
            } else {
              alert(child.textContent);
            }
          });
  
          // Check if the element contains "Fast and Furious" and it's not the first element
          if (child.textContent === "Fast and Furious" && i !== 0) {
            ul.removeChild(child); // Remove the element
            ul.insertBefore(child, ul.firstChild); // Move it to the top
            child.classList.add("important"); // Add the .important class
          }
        }
      }
    }
  
    // Add a keyup event listener to the document body for sorting and cloning
    document.body.addEventListener("keyup", function (event) {
      if (event.key === "r") {
        // Randomly shuffle the list items while keeping "Fast and Furious" first
        const items = Array.from(ul.children);
        const fastAndFurious = items.shift();
        items.sort(() => Math.random() - 0.5);
        items.unshift(fastAndFurious);
        ul.innerHTML = ""; // Clear the list
        items.forEach(function (item) {
          ul.appendChild(item);
        });
      } else if (event.key === "d") {
        // Clone the "Fast and Furious" element
        const fastAndFurious = ul.querySelector(".important");
        const clone = fastAndFurious.cloneNode(true);
        ul.insertBefore(clone, ul.firstChild);
      }
    });
  
    // Create a new <div> before the list
    const div = document.createElement("div");
    ul.parentNode.insertBefore(div, ul);
  
    // Create a <select> element and two <option> elements
    const select = document.createElement("select");
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
  
    option1.textContent = "Important Franchises";
    option2.textContent = "Normal Franchises";
  
    // Append the <option> elements to the <select> element
    select.appendChild(option1);
    select.appendChild(option2);
  
    // Append the <select> element to the <div>
    div.appendChild(select);
  
    // Add an event listener to the <select> to toggle visibility
    select.addEventListener("change", function () {
      const selectedOption = select.options[select.selectedIndex].textContent;
      ul.childNodes.forEach(function (child) {
        if (selectedOption === "Important Franchises") {
          if (child.classList.contains("important")) {
            child.style.visibility = "visible";
          } else {
            child.style.visibility = "hidden";
          }
        } else {
          child.style.visibility = "visible";
        }
      });
    });
  });