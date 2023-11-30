/*
Die "Big O"-Notation ist eine Methode zur Analyse der Laufzeitkomplexität von Algorithmen, 
die angibt, wie sich die Laufzeit eines Algorithmus in Bezug auf die Größe der Eingabe verhält. 
Sie ermöglicht es, den "Wachstumsgrad" eines Algorithmus zu beschreiben, 
wenn die Größe der Eingabe gegen Unendlich strebt.

In JavaScript gibt es verschiedene Algorithmen mit unterschiedlichen Laufzeitkomplexitäten. 
Die Big O-Notation hilft dabei, diese Algorithmen zu vergleichen und festzustellen, 
wie effizient sie für große Datenmengen sind.
*/

let array = [
  4, 5, 6, 3, 2, 5, 6, 7, 4, 2, 4, 6, 8, 9, 34, 2, 2, 4, 5, 76, 8, 5, 3, 322, 5,
  6, 76, 44, 43, 5, 6, 7, 78, 64, 3, 4, 4, 7, 543, 4, 234, 43, 5, 65, 76, 43, 2,
];

// O(1) - Konstanter Aufwand: Dies bedeutet, dass die Laufzeit des Algorithmus konstant bleibt, unabhängig von der Größe der Eingabe.
function getFirstElement(arr) {
  return arr[0];
}

// Der Aufwand, das erste Element eines Arrays abzurufen, bleibt konstant, egal wie groß das Array ist.
// console.log(getFirstElement(array));

// O(n) - Linearer Aufwand: Der Aufwand wächst linear mit der Größe der Eingabe.
function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// Hier wird jedes Element des Arrays durchlaufen, bis das gesuchte Element gefunden wird.
//console.log(findElement(array, 34));

// O(n^2) - Quadratischer Aufwand: Der Aufwand wächst quadratisch mit der Größe der Eingabe.
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Tausche Elemente, um das Array zu sortieren
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Bubble Sort hat einen quadratischen Aufwand, da für jedes Element im Array eine weitere Schleife durchlaufen wird.
console.log(bubbleSort(array));

/*
Es ist wichtig zu beachten, dass die Big O-Notation den schlimmsten Fall beschreibt. 
Ein Algorithmus mit O(n^2) kann beispielsweise in vielen Fällen schneller sein als ein Algorithmus mit O(n), 
aber im schlimmsten Fall wird der O(n)-Algorithmus für große Eingaben immer besser sein. 
Daher ist die Big O-Notation ein nützliches Instrument, um die Skalierbarkeit von Algorithmen zu verstehen.
*/
