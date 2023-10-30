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