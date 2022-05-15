const box = document.querySelector(".box")
const block = document.querySelector(".block")
let xPos = 0;
let yPos = 0;

function move() {
  if(xPos < 540 && yPos === 0) {
    xPos += 10;
    block.style.left =`${xPos}px`;
    setTimeout(() => {
      move();
    }, 25);
  }  else if (xPos >= 540 && yPos < 540 ) {
    yPos += 10;
    block.style.top = `${yPos}px`;
    setTimeout(() => {
      move();
    }, 25);
  }  else if (xPos > 0 && yPos >= 540) {
    xPos -= 10;
    block.style.left = `${xPos}px`;
    setTimeout(() => {
      move();
    }, 25)
  } else if (xPos === 0 && yPos > 0) {
    yPos -= 10;
    block.style.top = `${yPos}px`;
    setTimeout(() => {
      move();
    }, 25)
  }
}
move()

