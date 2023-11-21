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
Quick Sort ist ein weiterer effizienter Sortieralgorithmus, der auf dem Prinzip "Teilen und Erobern" basiert. 
Er wählt ein Pivotelement aus der Liste aus, partitioniert die Liste um das Pivotelement herum 
und sortiert dann die beiden Partitionen rekursiv.

Hier ist eine schrittweise Erklärung des Quick Sort Algorithmus:

1. Pivotauswahl:
   Ein Pivotelement wird aus der Liste ausgewählt. Dies kann auf verschiedene Arten geschehen, 
   aber eine häufige Methode besteht darin, das letzte Element der Liste als Pivotelement zu wählen.

2. Partitionierung:
   Die Liste wird so um das Pivotelement herum aufgeteilt, dass Elemente kleiner als das 
   Pivotelement auf der linken Seite und Elemente größer auf der rechten Seite liegen. 
   Das Pivotelement befindet sich nun an seiner endgültigen Position.

3. Rekursion:
   Die beiden entstandenen Partitionen werden nun separat sortiert, indem der Quick Sort Algorithmus 
   auf sie angewendet wird. Dieser Prozess wird rekursiv fortgesetzt, bis alle Teilbereiche sortiert sind.

4. Laufzeitkomplexität:
   Im Durchschnitt hat Quick Sort eine Laufzeitkomplexität von O(n log n), was ihn sehr effizient macht. 
   Der schlechteste Fall kann jedoch O(n^2) sein, insbesondere wenn das Pivotelement immer das 
   größte oder kleinste Element ist. Die Wahl des Pivotelements und spezielle Optimierungen können 
   jedoch dazu beitragen, den schlechtesten Fall zu minimieren.

5. In-situ-Sortierung:
   Quick Sort kann in situ (ohne zusätzlichen Speicherplatz) implementiert werden, was bedeutet, 
   dass nur sehr begrenzter zusätzlicher Speicherplatz benötigt wird. Dies macht Quick Sort in einigen Anwendungen, 
   insbesondere in Situationen mit begrenztem Speicher, attraktiv.

Quick Sort wird häufig in der Praxis verwendet und ist besonders nützlich für große Datensätze. 
Die optimale Leistung von Quick Sort hängt stark von der Wahl des Pivotelements ab, 
und es gibt verschiedene Strategien zur Pivotauswahl, um die Effizienz zu maximieren.
*/

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

measureTime(quickSort, testArray);