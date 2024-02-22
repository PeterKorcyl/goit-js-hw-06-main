const adjuster = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
adjuster.addEventListener("input", () => {
  const fontSize = adjuster.value + "px";
  textSpan.style.fontSize = fontSize;
});
