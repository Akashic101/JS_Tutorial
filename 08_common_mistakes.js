/*
JavaScript-Programme können unerwartete Ergebnisse liefern, wenn ein Programmierer versehentlich 
einen Zuweisungsoperator (=) anstelle eines Vergleichsoperators (==) in einer if-Anweisung verwendet.
*/

// Diese if-Anweisung liefert den Wert true (vielleicht nicht wie erwartet), denn 10 ist true:
let b = 0;
//console.log(Boolean(b = 10))

// This if statement returns false (maybe not as expected), because 0 is false:
let c = 0;
// console.log(Boolean(c = 0))

// Beim regulären Vergleich spielt der Datentyp keine Rolle. Diese if-Anweisung gibt true zurück:
let d = 10;
let e = "10";
// console.log(Boolean(d == e));

// Beim strengen Vergleich spielt der Datentyp eine Rolle. Diese if-Anweisung gibt false zurück:
let f = 10;
let g = "10";
// console.log(Boolean(f === g));





// Es ist ein häufiger Fehler, zu vergessen, dass switch-Anweisungen einen strengen Vergleich verwenden:

// In diesem Fall wird "Hello" ausgedruckt
let h = 10;
switch(h) {
  case 10: console.log("Hello");
  break;
}

// In diesem Fall wird nicht "Hello" ausgedruckt
let i = 10;
switch(i) {
  case "10": console.log("Hello");
  break;
}




/*
Verwechslung von Addition und Verkettung
Bei der Addition geht es um das Hinzufügen von Zahlen.
Bei der Verkettung geht es um die Addition von Zeichenketten.
In JavaScript verwenden beide Operationen denselben +-Operator.
Aus diesem Grund führt das Addieren einer Zahl als Zahl zu einem anderen Ergebnis als das Addieren einer Zahl als Zeichenfolge:
*/

let j = 10;
j = 10 + 5; // newJ ist jetzt 15

let k = 10;
k += "5"; // newK ist jetzt "105"




/*
Fließkommazahlen missverstehen
Alle Zahlen in JavaScript werden als 64-Bit-Fließkommazahlen (Floats) gespeichert.
Alle Programmiersprachen, auch JavaScript, haben Schwierigkeiten mit präzisen Fließkommazahlen:
*/
let l = 0.1;
let m = 0.2;
let n = l + m // das Ergebnis in n wird nicht 0,3 sein

// Um das obige Problem zu lösen, hilft es, zu multiplizieren und zu dividieren:
let o = (l * 10 + m * 10) / 10; // o will be 0.3





/*
Aufbrechen einer JavaScript-Zeichenkette
Mit JavaScript können Sie eine Anweisung in zwei Zeilen aufteilen:
*/

let p =
"Hello World!";

// Eine Anweisung in der Mitte einer Zeichenkette zu unterbrechen, funktioniert jedoch nicht:
// let q = "Hello
// World!";

// Du musst einen "Backslash" verwenden, wenn du eine Anweisung in einer Zeichenkette umbrechen musst:
let r = "Hello \
World!";



/*
Falsch gesetztes Semikolon
Aufgrund eines falsch gesetzten Semikolons wird dieser Codeblock unabhängig vom Wert von s ausgeführt:
*/
let s = 91;
if (s == 19);
{
  console.log('Dieser Teil wird immer durchgeführt')
}