/*

Was sind Variablen?

Variablen sind Container zum Speichern von Datenwerten in JavaScript. Diese Werte können verschiedene Typen haben, 
einschließlich Zahlen, Zeichenketten, Objekte und mehr. Variablen werden benannt, damit du auf Inhalt in deinem 
Code verweisen und ihn manipulieren kannst

*/

// Variablen deklarieren
// In JavaScript gibt es drei Möglichkeiten, Variablen zu deklarieren:

var alter = 25;

// var (weniger gebräuchlich): Dies war die ursprüngliche Methode, Variablen in JavaScript zu deklarieren,
// wird jedoch heute weniger häufig verwendet. Mit var deklarierte Variablen haben einen Funktionsbereich.

let name = "Sydney";

// let (bevorzugt für den Blockbereich): In ES6 (ECMAScript 2015) eingeführt, ist let die bevorzugte Methode,
// Variablen mit blockweitem Gültigkeitsbereich zu deklarieren.

const pi = 3.14159265359;

// const (Konstante Werte): Ebenfalls in ES6 eingeführt, wird const verwendet, um Variablen zu deklarieren,
// die nach ihrer anfänglichen Zuweisung nicht neu zugewiesen werden sollten.
// Auch sie haben einen blockweiten Gültigkeitsbereich.

/*
Beim Benennen Ihrer Variablen gibt es einige Regeln und Konventionen zu beachten:

Variablennamen sind Groß- und Kleinschreibung beachtend ( myVariable ist nicht dasselbe wie myvariable ).
Variablennamen müssen mit einem Buchstaben, einem Unterstrich (_) oder einem Dollarzeichen ($) beginnen.
Nachfolgende Zeichen können Buchstaben, Ziffern, Unterstriche oder Dollarzeichen sein.
Variablennamen können keine reservierten Schlüsselwörter in JavaScript sein (z.B. let, const, if, while, etc.).
*/

// Werte zuweisen

let punktzahl = 100;

// Werte auslesen

//console.log(punktzahl); //Ausgegebener Wert?

// Werte verändern

punktzahl = 200;
//console.log(punktzahl); // Gibt aus?

// Variablentypen

// Variablen in JavaScript sind dynamisch typisiert, was bedeutet, dass sie zu unterschiedlichen Zeiten
// unterschiedliche Datentypen enthalten können. Sie können beispielsweise eine Variable von einer Zahl in eine Zeichenkette ändern:

let meineVariable = 42;
//console.log(meineVariable)

meineVariable = "Hello World";
//console.log(meineVariable)


/*

JS ist eine weak-type Sprache. Im Gegensatz zu Java haben Variablen keinen festen Wert

Java: 

int myNum = 5;               // Integer (whole number)
float myFloatNum = 5.99f;    // Floating point number
char myLetter = 'D';         // Character
boolean myBool = true;       // Boolean
String myText = "Hello";     // String

*/


/*

Aufgabe:        Erstelle 5 variablen mit dem Namen "vorname", "nachname", "alter", "wohnort", "größe". Die ersten 2 variablen sollen constanten sein.
                Gib diese Variablen anschließend in der Konsole aus.

Extrapunkte:    Gib alle Variablen in einem Satz aus (Hinweis: Es gibt einen Unterschied zwischen ", ` und ')

*/