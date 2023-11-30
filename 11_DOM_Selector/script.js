// JavaScript-Datei für das Tutorial

// Funktion zum Ändern des Textinhalts und der Styles
function changeText() {
    // Element mit der ID "exampleText" auswählen und den Text ändern
    var textElement = document.getElementById("exampleText");
    textElement.textContent = "Der Text wurde erfolgreich geändert!";

    // Alle Elemente mit der Klasse "tutorial-paragraph" auswählen und den Style ändern
    var paragraphElements = document.getElementsByClassName("tutorial-paragraph");
    for (var i = 0; i < paragraphElements.length; i++) {
        paragraphElements[i].style.color = "blue";
        paragraphElements[i].style.backgroundColor = "red";
        paragraphElements[i].style.fontWeight = "bold";
    }

    // Das Element mit dem Selektor "button" auswählen und den Hintergrund ändern
    var buttonElement = document.querySelector("button");
    buttonElement.style.backgroundColor = "green";
}

