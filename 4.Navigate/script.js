/*
*/
// Select the last child of the <ol> tag and put it at the beginning of the list
const ol = document.querySelector("ol");
const lastLi = ol.lastElementChild;
const firstLi = ol.firstElementChild;
ol.insertBefore(lastLi, firstLi);