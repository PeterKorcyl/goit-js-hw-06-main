function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const widget = document.querySelector(".widget");
const colorSpan = document.querySelector(".color");

button.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  widget.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
