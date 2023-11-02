/*
*/
// Array of learners with their names
const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "Jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"];

// Function to generate a random background color
function getRandomBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

// Function to determine text color based on background color
function getTextColor(backgroundColor) {
    // Split the RGB string and convert to integers
    const [r, g, b] = backgroundColor.slice(4, -1).split(',').map(Number);

    // Calculate the brightness (luminance)
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Determine text color based on brightness
    return brightness > 128 ? "black" : "white";
}

// Shuffle the order of learners
learners.sort(() => Math.random() - 0.5);

// Get the <article> element to append sections
const article = document.querySelector("article");

// Create and append a <section> for each learner
learners.forEach(learner => {
    const section = document.createElement("section");
    section.style.backgroundColor = getRandomBackgroundColor();
    section.style.color = getTextColor(section.style.backgroundColor);

    const paragraph = document.createElement("p");
    paragraph.textContent = learner;

    section.appendChild(paragraph);
    article.appendChild(section);
});