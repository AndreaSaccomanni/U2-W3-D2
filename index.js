const form = document.querySelector("form");

const buttonSubmit = document.getElementById("submit");
const buttonClear = document.getElementById("clear");
const labelText = document.getElementById("label");

let names = [];

// Carica i dati dal localStorage se presenti
window.onload = function () {
  // Recupera i dati dal localStorage
  const savedNames = localStorage.getItem("allInputText");
  if (savedNames) {
    // Se ci sono dati salvati, li converto in array
    const names = JSON.parse(savedNames);

    // Aggiorna la label con l'ultimo nome o "Nome:" se vuoto
    const labelText = document.getElementById("label");
    labelText.textContent = names[names.length - 1] || "Nome:";

    // Carica gli elementi salvati nella lista
    const ul = document.getElementById("textSaved");
    names.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      li.className = "list-group-item";
      ul.appendChild(li);
    });
  }
};

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  // Seleziono il contenuto del campo dell'input
  const inputText = document.getElementById("textContent").value;

  // Controllo che il campo dell'input non sia vuoto
  if (inputText !== "") {
    // Inserisco il testo nell'array names
    names.push(inputText);

    // Converto l'array names in stringa JSON poi lo salvo in localStorage
    localStorage.setItem("allInputText", JSON.stringify(names));

    // L'elemento aggiunto all'array sarà il testo della label
    labelText.textContent = names[names.length - 1];

    // Aggiungi l'elemento alla lista
    const ul = document.getElementById("textSaved");
    const li = document.createElement("li");
    li.textContent = inputText;
    li.className = "list-group-item";
    ul.appendChild(li);

    form.reset();
  } else {
    alert("Inserisci un nome!");
  }
});

buttonClear.addEventListener("click", function (event) {
  event.preventDefault();

  if (names.length > 0) {
    // Rimuove l'ultimo elemento dell'array
    names.pop();

    // Aggiorna la label con l'ultimo nome o "Nome:" se l'array è vuoto
    labelText.textContent = names.length > 0 ? names[names.length - 1] : "Nome:";

    // Rimuove l'ultimo elemento dalla lista, se esiste
    const ul = document.getElementById("textSaved");
    const lastLi = ul.lastElementChild;
    if (lastLi) {
      ul.removeChild(lastLi);
    }

    // Aggiorna il localStorage
    localStorage.setItem("allInputText", JSON.stringify(names));
  } else {
    // Se l'array è vuoto, resetta la label
    labelText.textContent = "Nome:";
  }

  form.reset();
});

const timer = document.getElementById("timer");

// Recupera il valore del timer dal localStorage o inizializza a 0 se non esiste
let i = parseInt(localStorage.getItem("timerValue")) || 0;

// Imposta il valore iniziale del timer
timer.textContent = i;

// Funzione per aggiornare il timer ogni secondo
setInterval(() => {
  i++;
  timer.textContent = i; // Aggiorna il contenuto del timer sulla pagina

  // Salva il valore aggiornato nel localStorage
  localStorage.setItem("timerValue", i);
}, 1000);

const resetTimer = document.getElementById("resetTimer");
resetTimer.addEventListener("click", function () {
  i = 0;
  localStorage.setItem("timerValue", 0);
});
