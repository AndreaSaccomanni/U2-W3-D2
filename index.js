const form = document.querySelector("form");

const buttonSubmit = document.getElementById("submit");
const buttonClear = document.getElementById("clear");
const labelText = document.getElementById("label");

const names = [];

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  const inputText = document.getElementById("textContent").value;

  if (inputText !== "") {
    //PRENDO IL TESTO CONTENUTO NELL'INPUT
    //INSERISCO I VALORI INSERITI NEGLI INPUT NELL'ARRAY NAMES
    names.push(inputText);

    localStorage.setItem("allInputText", JSON.stringify(names));

    const arrNamesFromStorage = localStorage.getItem("allInputText");
    const allInputTextArr = JSON.parse(arrNamesFromStorage);

    allInputTextArr.forEach((element) => {
      labelText.textContent = element;
    });

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
    labelText.textContent = names[names.length - 1];
    // Aggiorna il localStorage
    localStorage.setItem("allInputText", JSON.stringify(names));
  } else if (names.length <= 0) {
    labelText.textContent = "Nome:";
  }

  form.reset();
});
