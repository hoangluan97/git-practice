var button = document.querySelectorAll(".ripple");
button.forEach((but) => {
  but.addEventListener("click", function (e) {
    const xClient = e.clientX;
    const yClient = e.clientY;
    const yOffset = e.target.offsetTop;
    const xOffset = e.target.offsetLeft;
    console.log(yOffset);
    const xPosition = xClient - xOffset;
    const yPosition = yClient - yOffset;
    const circle = document.createElement("span");
    circle.classList.add("spanC");
    circle.style.top = yPosition + "px";
    circle.style.left = xPosition + "px";
    this.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});
