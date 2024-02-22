// Pobranie danych do DOM
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Dodanie event listener dla zdarzenia input
nameInput.addEventListener("input", () => {
  // Ustawienie wartości spana na aktualną wartość pola input lub "Anonymous" jeśli pole jest puste
  nameOutput.textContent =
    nameInput.value.trim() !== "" ? nameInput.value : "Anonymous";
});
