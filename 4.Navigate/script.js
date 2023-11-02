/*
*/
// Select the last child of the <ol> tag and put it at the beginning of the list
const ol = document.querySelector("ol");
const lastLi = ol.lastElementChild;
const firstLi = ol.firstElementChild;
ol.insertBefore(lastLi, firstLi);

//Move the <h2> of the third section in the second one and vice-versa
const secondSection = document.querySelectorAll("section")[1];
const thirdSection = document.querySelectorAll("section")[2];
const h2Second = secondSection.querySelector("h2");
const h2Third = thirdSection.querySelector("h2");

secondSection.insertBefore(h2Third, secondSection.firstChild);
thirdSection.insertBefore(h2Second, thirdSection.firstChild);

// Delete the last section from the DOM
const main = document.querySelector("main");
const lastSection = main.lastElementChild;
main.removeChild(lastSection);