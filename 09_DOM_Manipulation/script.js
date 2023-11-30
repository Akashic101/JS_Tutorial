// Selektiere das Element mit der ID 'changeTextButton'
var button = document.getElementById("changeTextButton");
console.log(button)

// Füge einen Klick-Eventlistener hinzu
button.addEventListener("click", function () {
  // Selektiere das Element mit der ID 'changeText'
  var textElement = document.getElementById("changeText");

  // Ändere den Text des Elements
  textElement.innerText = "Text wurde geändert!";
});
