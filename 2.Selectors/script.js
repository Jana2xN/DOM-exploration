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
