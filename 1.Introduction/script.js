console.log(document.title);
console.log(document.title = "Modifying the DOM");
document.body.style.backgroundColor = "#FF69B4";
function getRandomColor() {
    var r = Math.floor(Math.random() * 256); //Random betseen 0 - 255
    var g = Math.floor(Math.random() * 256); //Random betseen 0 - 255
    var b = Math.floor(Math.random() * 256); //Random betseen 0 - 255
    return "rgb(" + r + "," + g + "," + b + ")";
}
document.body.style.backgroundColor = getRandomColor();

// Get a reference to the <body> element
const body = document.body;

// Get the second child element of the <body> (which is <main>)
const secondChild = body.children[1];

// Display all the children elements of the second child element
for (const child of secondChild.children) {
    console.log(child);
}

