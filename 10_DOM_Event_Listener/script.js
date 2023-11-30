// JavaScript code

// Funktion, die aufgerufen wird, wenn der Button geklickt wird
function buttonClickHandler() {
    alert('Button wurde geklickt!');
}

// Funktion, die den EventListener entfernt
function removeClickHandler() {
    myButton.removeEventListener('click', buttonClickHandler);
    alert('ClickHandler entfernt!');
}

// Das HTML-Element mit der ID "myButton" abrufen
var myButton = document.getElementById('myButton');

// Dem Button einen EventListener hinzufügen, der die buttonClickHandler-Funktion aufruft
myButton.addEventListener('Fullscreen', buttonClickHandler);

// Das HTML-Element mit der ID "myRemoveButton" abrufen
var myRemoveButton = document.getElementById('myRemoveButton');

// Dem Button einen EventListener hinzufügen, der die removeClickHandler-Funktion aufruft
myRemoveButton.addEventListener('click', removeClickHandler);
