const drag = document.querySelector(".drag");
const empties = document.querySelectorAll(".empty");

drag.addEventListener("dragstart", dragStart);
drag.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";
}

function dragEnd() {
  this.className = "drag";
}

function dragEnter(e) {
  e.preventDefault();
}

function dragOver(e) {
  e.preventDefault();
  this.className += " hover";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  this.className = "empty";
  this.append(drag);
}
