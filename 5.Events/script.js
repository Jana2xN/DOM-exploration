const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

const clickOnSquare = (colorClass) => {
  // Create a new <div> with the class .displayedsquare and the corresponding color
  const displayedSquare = document.createElement('div');
  displayedSquare.classList.add('displayedsquare', colorClass);
  
  // Append the new <div> to the .displayedsquare-wrapper section
  const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');
  displayedsquareWrapper.appendChild(displayedSquare);

  // Create a new <li> in the action log
  const actionLog = document.querySelector('.action-log');
  const actionTime = getElapsedTime();
  const actionItem = document.createElement('li');
  actionItem.textContent = `Action done: ${colorClass} square clicked at ${actionTime}`;
  actionLog.appendChild(actionItem);

  // Add a click event listener to the displayed square
  displayedSquare.addEventListener('click', () => {
    // Show an alert with the color of the clicked square
    alert(`Clicked square color: ${colorClass}`);
  });
}

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', () => {
    clickOnSquare(actionSquare.classList[1]);
  });
}

// Event listener for keypress on the document body
document.body.addEventListener('keypress', (e) => {
  if (e.key === ' ') { // Check for spacebar
    // Randomly change the background color of the whole page
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    document.body.style.backgroundColor = randomColor;

    // Log when the spacebar is used
    console.log('Spacebar pressed');
    console.log(getElapsedTime());
  } else if (e.key === 'l') { // Check for 'l' key
    // Clear the action log (remove all <li> elements)
    const actionLog = document.querySelector('.action-log');
    while (actionLog.firstChild) {
      actionLog.removeChild(actionLog.firstChild);
    }
  } else if (e.key === 's') { // Check for 's' key
    // Clear the generated squares (remove all .displayedsquare elements)
    const displayedsquareWrapper = document.querySelector('.displayedsquare-wrapper');
    displayedsquareWrapper.innerHTML = '';
  }
});