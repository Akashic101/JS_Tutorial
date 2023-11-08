/*

Funktionen sind grundlegende Konstrukte in der Programmierung, die eine Gruppe von Anweisungen 
zusammenfassen und als eine Einheit ausführen. Sie ermöglichen es, Code in kleinere, wiederverwendbare 
Teile aufzuteilen und so die Lesbarkeit, Wartbarkeit und Effizienz von Programmen zu verbessern.

*/

// Hier definieren wir eine Funktion, die zwei Zahlen addiert und das Ergebnis zurückgibt
function addieren(a, b) {
  const summe = a + b;
  return summe;
}

function subtrahieren(a, b) {
  const summe = a - b;
  return summe;
}

// Die Funktion "addieren" aufrufen und das Ergebnis in einer Variablen speichern
let ergebnis = addieren(3, 5);
//console.log(ergebnis);

ergebnis = subtrahieren(3, 5);
//console.log(ergebnis);

// Function als Variablenwert

// Funktionen können auf die gleiche Weise wie Variablen in allen Arten von Formeln, Zuweisungen und Berechnungen verwendet werden.

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius;

let x = toCelsius(77);

let text = "Die Temperatur ist " + x + "°C";
//console.log(text)

text = "Die Temperatur ist " + toCelsius(77) + "°C";
//console.log(text)



// Lokale Variablen

// code hier kann nicht auto der function benutzen

let auto = "Volkswagen";

function autoFunction() {
  let auto = "Volvo";
  return auto;
  // code hier kann auto der function benutzen
}

//console.log(auto)
//console.log(autoFunction())


// Aufgabe

// Definiere die Funktion gebeGrussAus
function gebeGrussAus(name) {
  
}

/*

Aufgabe: 

Verwende die Funktion, um verschiedene Personen zu begrüßen
gebeGrussAus("Max"); // Gibt "Hallo, Max!" aus
gebeGrussAus("Anna"); // Gibt "Hallo, Anna!" aus
gebeGrussAus("Peter"); // Gibt "Hallo, Peter!" aus

*/
