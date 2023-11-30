//Funktionen, die parallel zu anderen Funktionen ablaufen, werden als asynchron bezeichnet
//Ein gutes Beispiel ist setTimeout()

function doThisLater() {
    return console.log("I am finished");
}

setTimeout(doThisLater, 3000)

/*
Bei der asynchronen Programmierung können JavaScript-Programme langlaufende Aufgaben starten und andere Aufgaben parallel dazu ausführen.
Allerdings sind asynchrone Programme schwierig zu schreiben und schwer zu debuggen.
Aus diesem Grund verwenden die meisten modernen asynchronen JavaScript-Methoden keine Rückrufe. 
Stattdessen wird in JavaScript die asynchrone Programmierung mit Promises gelöst.
*/