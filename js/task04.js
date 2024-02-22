// Pobranie danych z DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterSpan = document.querySelector("#value");

// Inicjalizacja zmiennej counterValue
let counterValue = 0;

// Początkowa wartość dla counterValue
counterSpan.textContent = counterValue;

// Dodanie event listener dla przycisku decrement
decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
});

// Dodanie event listener dla przycisku increment
incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counterSpan.textContent = counterValue;
});
