//async lässt eine Funktion ein Promise zurückgeben
//await lässt eine Funktion auf ein Promise warten

/*
In JavaScript ermöglichen asynchrone Funktionen (Async Functions) die Ausführung von asynchronem Code, 
ohne den Haupt-Thread zu blockieren. Dies ist besonders nützlich, wenn Operationen wie Netzwerkanfragen oder 
Dateizugriffe ausgeführt werden müssen, ohne dass die gesamte Ausführung des Programms darauf warten muss. 
Async Functions verwenden das async-Schlüsselwort und das await-Schlüsselwort.
*/

async function fetchData() {
  console.log("Fetching data...");
  return "Data fetched!";
}

//Verwendung von await

async function fetchDataWithDelay() {
  console.log("Start fetching data...");
  // Simuliere eine Verzögerung von 2 Sekunden
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Data fetched after delay.");
}

//Fehlerbehandlung mit try und catch

async function fetchDataWithError() {
  try {
    console.log("Fetching data...");
    // Simuliere einen Fehler
    throw new Error("Failed to fetch data.");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

//Parallelisierung von asynchronen Operationen
async function parallelAsyncOperations() {
  const result1 = fetchData();
  const result2 = fetchDataWithDelay();

  // Warte auf beide Ergebnisse, bevor du fortfährst
  const data1 = await result1;
  await result2;

  console.log("Data 1:", data1);
  console.log("Data 2 fetched after delay.");
}

parallelAsyncOperations()