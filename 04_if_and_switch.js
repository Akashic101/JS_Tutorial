/*

If-Else-Anweisungen in JavaScript sind Kontrollstrukturen, die es ermöglichen, 
je nach einer bestimmten Bedingung unterschiedliche Aktionen auszuführen.

*/

const alter = 18;

if (alter >= 18) {
  console.log("Du bist volljährig.");
} else if (alter < 18) {
  console.log("Du bist minderjährig.");
} else {
    console.log('Ich habe keinen Plan')
}

/*
const tag = "Donnerstag";

switch (tag) {
  case "Montag":
    console.log("Heute ist Montag.");
    break;
  case "Dienstag":
    console.log("Heute ist Dienstag.");
    break;
  case "Mittwoch":
    console.log("Heute ist Mittwoch.");
    break;
  case "Donnerstag":
    console.log("Heute ist Donnerstag.");
    break;
  case "Freitag":
    console.log("Heute ist Freitag.");
    break;
  default:
    console.log("Das ist kein Wochentag.");
}
*/


/*

Aufgabe: Schreibe ein JavaScript-Programm, das die Noten von Studenten bewertet und je nach der erreichten Punktzahl 
eine Bewertung in Form von Buchstaben ausgibt. Verwende sowohl ein if-Statement als auch ein switch-Statement für diese Aufgabe.

Wenn die Punktzahl eines Studenten zwischen 90 und 100 liegt, soll die Bewertung "1" ausgegeben werden.
Wenn die Punktzahl zwischen 80 und 89 liegt, soll "2" ausgegeben werden.
Wenn die Punktzahl zwischen 70 und 79 liegt, soll "3" ausgegeben werden.
Wenn die Punktzahl zwischen 60 und 69 liegt, soll "4" ausgegeben werden.
Wenn die Punktzahl zwischen 50 und 59 liegt, soll "5" ausgegeben werden.
Wenn die Punktzahl unter 50 liegt, soll "6" ausgegeben werden.

Schreibe die Aufgabe einmal als if-statement und einmal als switch-statement

*/