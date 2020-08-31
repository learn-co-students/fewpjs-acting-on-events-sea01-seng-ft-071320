// Your code here

let dodger = document.getElementById("dodger");


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
});

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});


//move right
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left < 400) {
    dodger.style.left = `${left + 1}px`;
  }
}

//move right
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}



//move up
function moveDodgerUp() {
  let upNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(upNumbers, 20);
 
  if (bottom ) {
    dodger.style.bottom = `${bottom + 1}px`;
  }
  console.log(upNumbers)
  console.log(dodger.style.bottom)
}

//move down
function moveDodgerDown() {
  let upNumbers = dodger.style.bottom.replace("px", "");
  let bottom = parseInt(upNumbers,10);
 
  if (bottom ) {
    dodger.style.bottom = `${bottom - 1}px`;
  }
  console.log(upNumbers)
  console.log(dodger.style.bottom)
}