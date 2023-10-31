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