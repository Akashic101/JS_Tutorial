const testArray = [
  73, 21, 45, 92, 68, 8, 14, 56, 34, 79, 61, 27, 1, 50, 99, 38, 87, 4, 66, 29,
  91, 42, 13, 78, 7, 59, 84, 11, 95, 23, 6, 72, 2, 47, 89, 31, 77, 18, 55, 83,
  3, 65, 22, 97, 46, 74, 16, 53, 37, 88, 26, 69, 93, 54, 39, 86, 5, 62, 20, 75,
  10, 58, 85, 12, 67, 32, 96, 49, 81, 24, 9, 64, 30, 82, 40, 98, 17, 71, 35, 60,
  33, 76, 15, 43, 80, 19, 52, 70, 41, 94, 25, 57, 48, 63, 28, 90, 36, 51, 44,
  76,
];

// Funktion zum Messen der Zeit
function measureTime(algorithm, array) {
  const startTime = performance.now(); // Startzeit erfassen
  algorithm(array); // Algorithmus ausführen
  const endTime = performance.now(); // Endzeit erfassen
  const executionTime = endTime - startTime; // Differenz berechnen
  console.log(`Der Algorithmus hat ${executionTime} Millisekunden gedauert.`);
}

/*
Merge Sort ist ein effizienter Sortieralgorithmus, der nach dem Prinzip "Teilen und Erobern" arbeitet. 
Er zerlegt die zu sortierende Liste in kleinere Teillisten, sortiert diese rekursiv und kombiniert 
dann die sortierten Teillisten, um die endgültig sortierte Liste zu erhalten.

Hier ist eine schrittweise Erklärung des Merge Sort Algorithmus:

1. Aufteilen (Teilen):
   Die zu sortierende Liste wird rekursiv in zwei Hälften aufgeteilt, 
   bis jede Teilmenge nur noch ein Element enthält oder leer ist.

2. Sortieren (Erobern):
   Die rekursiv aufgeteilten Teillisten werden nun sortiert. Dies geschieht durch Vergleichen 
   der Elemente und Zusammenführen (Merge) der sortierten Teillisten.

3. Merge (Zusammenführen):
   Die sortierten Teillisten werden in einem Schritt zusammengeführt, um eine größere 
   sortierte Liste zu erstellen. Dabei werden die Elemente der beiden Teillisten verglichen, 
   und das kleinere Element wird in die endgültige Liste verschoben. Dieser Prozess wird wiederholt, 
   bis alle Elemente in die endgültige Liste verschoben sind.

4. Rekursion und Basisfall:
   Die Rekursion endet, wenn die Teillisten nur noch ein Element enthalten oder leer sind. 
   Ein Listenabschnitt mit einem oder keinem Element gilt als bereits sortiert und wird direkt zurückgegeben.

5. Laufzeitkomplexität:
   Merge Sort hat eine stabile Laufzeitkomplexität von O(n log n), unabhängig von der Verteilung der Daten. 
   Dies macht ihn effizient für große Datensätze. Allerdings erfordert Merge Sort zusätzlichen 
   Speicherplatz für die temporären Teillisten, was bei sehr großen Datenmengen berücksichtigt werden sollte.

Merge Sort zeichnet sich durch seine Klarheit, Stabilität und konstante Laufzeit aus, 
was ihn zu einer guten Wahl für viele Anwendungen macht. Es wird oft in der Praxis eingesetzt 
und ist auch ein Beispiel für einen stabilen Sortieralgorithmus, 
da er die relative Reihenfolge gleicher Elemente beibehält.
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

measureTime(mergeSort, testArray);