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

Bubble Sort ist ein einfacher, aber ineffizienter Sortieralgorithmus, 
der wiederholt durch eine Liste geht, benachbarte Elemente vergleicht und sie vertauscht, 
wenn sie in der falschen Reihenfolge sind. Dieser Vorgang wird so lange wiederholt, 
bis die gesamte Liste sortiert ist.

Hier ist eine schrittweise Erklärung des Bubble Sort Algorithmus:

Vergleiche benachbarte Elemente:
Der Algorithmus beginnt mit dem Vergleich des ersten Elements der Liste mit dem zweiten Element. 
Wenn das erste Element größer ist als das zweite, werden die beiden Elemente vertauscht. 
Dieser Prozess wird für jedes aufeinanderfolgende Paar von Elementen in der Liste wiederholt.

Fortsetzung der Durchläufe:
Nach dem ersten Durchlauf wird das größte Element am Ende der Liste platziert (sofern es das größte Element ist). 
Der Algorithmus beginnt dann einen neuen Durchlauf, bei dem das vorletzte Element
mit dem vorvorletzten verglichen wird, und so weiter. Dieser Prozess wird so lange wiederholt, 
bis die gesamte Liste sortiert ist.

Laufzeitkomplexität:
Die Laufzeitkomplexität von Bubble Sort beträgt im schlimmsten Fall O(n^2), was bedeutet, 
dass die Anzahl der Vergleiche und Vertauschungen quadratisch mit der Größe der Liste zunimmt. 
Dies macht Bubble Sort ineffizient für große Datenmengen, insbesondere im Vergleich zu 
effizienteren Sortieralgorithmen wie Merge Sort oder Quick Sort.

Bubble Sort ist eher ein einfacher Lehralgorithmus als eine praktische Sortiermethode für große Datensätze, 
und es wird oft zu Demonstrationszwecken verwendet, um die Grundkonzepte von Sortieralgorithmen zu vermitteln.
*/

function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

measureTime(bubbleSort, testArray);

