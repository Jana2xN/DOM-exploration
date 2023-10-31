// Add a title attribute to every element that has the "important" class
const importantElements = document.querySelectorAll(".important");
importantElements.forEach(element => {
    element.setAttribute("title", "This is an important item");
});

// Select all the img tags and hide them if they don't have the "important" class
const imgElements = document.querySelectorAll("img");
imgElements.forEach(img => {
    if (!img.classList.contains("important")) {
        img.style.display = "none";
    }
});

// Loop through all the paragraphs and display their content in the console
// If the paragraph has a class, display its classname as well
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
    console.log("Paragraph Content: " + paragraph.textContent);
    if (paragraph.classList.length > 0) {
        console.log("Class Name: " + paragraph.classList[0]);
    }
});

// Give each paragraph a random text color (different for each one) unless it has a class
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
paragraphs.forEach(paragraph => {
    if (paragraph.classList.length === 0) {
        paragraph.style.color = getRandomColor();
    }
});