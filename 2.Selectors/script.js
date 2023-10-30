// Get all elements with the "important" class
const importantElements = document.querySelectorAll(".important");
// Loop through each element and add the title attribute
importantElements.forEach(element => {
    element.setAttribute("title", "This is an important item");
});

// Select all img tags
const imgElements = document.querySelectorAll("img");
// Loop through the img elements
imgElements.forEach(img => {
    // Check if the img element does not have the "important" class
    if (!img.classList.contains("important")) {
        // Set the display property to "none" to hide it
        img.style.display = "none";
    }
});

// Select all paragraphs
const paragraphs = document.querySelectorAll("p");
// Loop through the paragraphs
paragraphs.forEach(paragraph => {
    // Display the paragraph content
    console.log("Paragraph Content: " + paragraph.textContent);
    // Check if the paragraph has a class
    if (paragraph.classList.length > 0) {
        // Display the class name
        console.log("Class Name: " + paragraph.classList[0]);
    }
});

// Function to generate a random color in RGB format
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
// Loop through the paragraphs
paragraphs.forEach(paragraph => {
    // Check if the paragraph has a class
    if (paragraph.classList.length === 0) {
        // If it doesn't have a class, assign a random text color
        paragraph.style.color = getRandomColor();
    }
});