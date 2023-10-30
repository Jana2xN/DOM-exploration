const importantElements = document.querySelectorAll(".important");
importantElements.forEach(element => {
    element.setAttribute("title", "This is an important item");
});
const imgElements = document.querySelectorAll("img");
imgElements.forEach(img => {
    if (!img.classList.contains("important")) {
        img.style.display = "none";
    }
});
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach(paragraph => {
    console.log("Paragraph Content: " + paragraph.textContent);
    if (paragraph.classList.length > 0) {
        console.log("Class Name: " + paragraph.classList[0]);
    }
});
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