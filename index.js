const form = document.querySelector("form");

const buttonSubmit = document.getElementById("submit");
const buttonClear = document.getElementById("clear");
const labelText = document.getElementById("label");

const names = [];

buttonSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  //SELEZIONO IN CONTENUTO DEL CAMPO DELL'INPUT
  const inputText = document.getElementById("textContent").value;

  //CONTROLLO CHE IL CAMPO DELL'INPUT NON SIA VUOTO
  if (inputText !== "") {
    //INSERISCO IL TESTO INSERITO NELL'INPUT NELL'ARRAY NAMES
    names.push(inputText);

    //CONVERTO L'ARRAY NAMES IN STRINGA JSON PRIMA DI SALVARLO IN LOCAL STORAGE
    localStorage.setItem("allInputText", JSON.stringify(names));

    //L'ELEMENTO AGIGUNTO ALL'ARRAY SARà IL TESTO DELLA LABEL
    labelText.textContent = names[names.length - 1];

    const ul = document.getElementById("textSaved");

    const li = document.createElement("li");
    li.textContent = inputText;
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
    labelText.textContent = names[names.length - 1];

    const ul = document.getElementById("textSaved");
    const lastLi = ul.lastElementChild;
    ul.removeChild(lastLi);

    // Aggiorna il localStorage
    localStorage.setItem("allInputText", JSON.stringify(names));
  } else if (names.length <= 0) {
    labelText.textContent = "Nome:";
  }

  form.reset();
});
