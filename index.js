// Your code here
let dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
console.log(dodger.style.left);
console.log(dodger.style.bottom);
dodger.style.bottom = "180px";
dodger.style.bottom = "0px";

// document.addEventListener("keydown", function (e) {
//   console.log(e.key);
// });

// document.addEventListener("keydown", function (e) {
//   if (e.key === "ArrowLeft") {
//     let leftNumbers = dodger.style.left.replace("px", "");
//     console.log(leftNumbers);
//     let left = parseInt(leftNumbers, 10);
//     console.log(left);

//     dodger.style.left = `${left - 1}px`;
//   }
// });
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
function moveDodgerRight() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left + 1}px`;
  }
}
