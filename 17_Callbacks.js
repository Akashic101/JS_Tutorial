//JavaScript-Funktionen werden in der Reihenfolge ausgeführt, in der sie aufgerufen werden. Nicht in der Reihenfolge, in der sie definiert sind.

function myFirst() {
  console.log("Hello");
}

function mySecond() {
  console.log("World");
}

myFirst();
mySecond();

/*
Manchmal möchte man besser kontrollieren, wann eine Funktion ausgeführt wird.
Nehmen wir an, du möchtest eine Berechnung durchführen und dann das Ergebnis anzeigen.
Du köntest eine Taschenrechnerfunktion (myCalculator) aufrufen, das Ergebnis speichern und dann eine andere Funktion (myDisplayer) aufrufen, um das Ergebnis anzuzeigen:
*/

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

function myDisplayer(result) {
  return `Das Ergebnis ist ${result}`;
}

let result = myCalculator(1, 2);
console.log(myDisplayer(result));

/*
Ein Callback ist eine Funktion, die als Argument an eine andere Funktion übergeben wird.

Mit einem Callback können Sie die Taschenrechnerfunktion (myCalculator) mit einem Callback (myCallback) 
aufrufen und die Taschenrechnerfunktion den Callback ausführen lassen, nachdem die Berechnung abgeschlossen ist:
*/

function myCallBackDisplayer(result) {
  console.log(`Das Ergebnis ist ${result}`);
}

function myCallBackCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCallBackCalculator(5, 5, myCallBackDisplayer);

// Weiteres Beispiel

// Ein Array erstellen
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// removeNeg mit einem Rückruf aufrufen
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Ergebnis anzeigen
console.log(posNumbers)

// Nur positive Zahlen behalten
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
