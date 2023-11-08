/*

Arrays in JavaScript sind Datenstrukturen, die dazu dienen, eine geordnete Liste von Werten zu speichern. 
Diese Werte können beliebige Datentypen sein, einschließlich Zahlen, Zeichenketten, Objekte und mehr. 
Arrays sind in JavaScript vielseitig und werden häufig verwendet, um Gruppen von ähnlichen 
Elementen zu organisieren und darauf zuzugreifen.

Ein Array in JavaScript ist eine geordnete Sammlung von Werten, wobei jedem Wert ein Index zugewiesen wird. 
Das erste Element hat den Index 0, das zweite Element den Index 1 und so weiter. Du kannst auf die 
Elemente eines Arrays zugreifen, indem du den Index verwendest.

*/

const zahlen = [1, 2, 3, 4, 5];

//console.log(zahlen[0]);
//console.log(zahlen[2]);
//console.log(zahlen.length);

zahlen.push(6); //Fügt den in Klammern eingegeben Wert dem Array hinzu
//console.log(zahlen);

let entfernteZahl = zahlen.pop(); // Entfernt den letzten Wert im Array und speichert diesen in einer Variable
//console.log(zahlen);
//console.log(entfernteZahl);

/*

Objekte in JavaScript sind komplexe Datenstrukturen, die dazu dienen, verwandte Informationen in Form 
von Eigenschaften und Werten zu speichern. Objekte ermöglichen es, unterschiedliche Arten von Daten 
zusammenzufassen und zu organisieren. Jede Eigenschaft eines Objekts hat einen Namen (Schlüssel) und einen zugehörigen Wert.

*/

const person = {
  vorname: "Max",
  nachname: "Mustermann",
  alter: 30,
  beruf: "Ingenieur",
};

//console.log(person.vorname); // Gibt "Max" aus
//console.log(person.alter); // Gibt 30 aus

person.email = "max@example.com"; // Fügt eine neue Eigenschaft hinzu
person.alter = 31; // Ändert den Wert einer bestehenden Eigenschaft

const auto = {
  marke: "Volkswagen",
  modell: "Golf",
  baujahr: 2020,
  beschleunigen: function () {
    console.log("Das Auto beschleunigt.");
  },
};

auto.beschleunigen(); // Ruft die Methode "beschleunigen" auf

/*

Du sollst einen Katalog von Büchern erstellen, der in JavaScript mit Objekten und Arrays organisiert wird.
Erstelle ein Array namens buchkatalog, das mehrere Bücher repräsentiert. 
Jedes Buch wird als Objekt mit den folgenden Eigenschaften gespeichert: titel (String), autor (String), veröffentlicht (Jahr, z.B., 2020).

Füge mindestens drei Bücher zum buchkatalog hinzu.

Schreibe eine Funktion namens sucheBuch, die den Titel eines Buchs als Parameter annimmt und nach diesem Buch im Katalog sucht. 
Wenn das Buch gefunden wird, soll die Funktion Informationen über das Buch zurückgeben, 
einschließlich des Autors und des Veröffentlichungsjahres. 
Andernfalls sollte die Funktion "Buch nicht gefunden" zurückgeben.

Verwende die sucheBuch-Funktion, um nach einem Buch im Katalog zu suchen und die Informationen darüber anzuzeigen.

*/