/*

For-Schleife (for): Die For-Schleife ist die am häufigsten verwendete Schleifenart in JavaScript. 
Sie besteht aus drei Teilen: der Initialisierung, der Bedingung und der Aktualisierung. 
Die Schleife wird so lange ausgeführt, wie die Bedingung wahr ist.

*/

for (let i = 1; i <= 5; i++) {
  //console.log(i);
}

/*

For-In-Schleife (for...in): Die For-In-Schleife wird verwendet, um die Eigenschaften von Objekten zu durchlaufen. 
Sie ist besonders nützlich, um durch die Schlüssel oder Indizes eines Arrays oder die Eigenschaften eines Objekts zu iterieren.

*/

const person = {
  name: "Max",
  alter: 30,
  beruf: "Ingenieur",
};

for (let eigenschaft in person) {
  //console.log(eigenschaft);
}

for (let eigenschaft in person) {
  const wert = person[eigenschaft]; // Zugriff auf den Wert über den Schlüssel
  //console.log(wert); // Gibt die Werte ("Max", 30, "Ingenieur") aus
}

/*

For-Of-Schleife (for...of): Die For-Of-Schleife ist dazu gedacht, 
durch die Elemente von Iterierbaren wie Arrays, Strings, Maps und Sets zu iterieren. 
Sie bietet eine einfache Möglichkeit, auf die Werte dieser Datenstrukturen zuzugreifen.

*/

const farben = ["Rot", "Grün", "Blau"];

for (let farbe of farben) {
  //console.log(farbe); // Gibt die Werte (Rot, Grün, Blau) aus
}

/*

While-Schleife (while): Die While-Schleife wird so lange ausgeführt, wie eine bestimmte Bedingung wahr ist.
Sie hat keine explizite Zählvariable wie die For-Schleife.

*/

let i = 0;
while (i < 5) {
  //console.log(i);
  i++;
}

/*

Do-While-Schleife (do...while): Die Do-While-Schleife ähnelt der While-Schleife, 
jedoch wird die Bedingung nach der Ausführung der Schleife überprüft. Dies stellt sicher, dass der 
Schleifenkörper mindestens einmal ausgeführt wird.

*/

let j = 0;
do {
  // Führe diese Anweisungen mindestens einmal aus
  j++;
  //console.log(j);
} while (j < 5);

/*

Aufgabe: Schreibe ein JavaScript-Programm, das alle Zahlen von 0 bis 100 findet und ausgibt, 
die durch 9 teilbar sind. Verwende dazu eine for-Schleife, um die Zahlen von 0 bis 100 zu durchlaufen, 
und überprüfe, ob jede Zahl durch 9 ohne Rest teilbar ist. Wenn eine Zahl durch 9 teilbar ist, gib sie aus.

*/
