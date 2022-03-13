const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const buttonIns = document.getElementById("increase");
const buttonDec = document.getElementById("decrease");
const sizeNumber = document.getElementById("size");
const clear = document.getElementById("clear");
const inputColor = document.getElementById("color");

let size = 20;
// let x;
// let y;
let color = "black";
let isPressed = false;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

buttonIns.addEventListener("click", () => {
  size += 5;
  sizeNumber.innerHTML = size;
});

buttonDec.addEventListener("click", () => {
  size -= 5;
  if (size <= 5) {
    size = 1;
  }
  sizeNumber.innerHTML = size;
});

clear.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

inputColor.addEventListener("change", (e) => {
  color = e.target.value;
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}
