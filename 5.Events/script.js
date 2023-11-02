const _initTime = Date.now();

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's';
}

const clickOnSquare = (e) => {
  // Get the color class of the clicked action square
  const colorClass = e.target.classList[1];
  console.log(colorClass);
  
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
}

const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare);
}