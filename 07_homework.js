// 1: Erstelle ein leeres Array namens einkaufsliste.
let einkaufsliste = [];


// 2: Schreibe eine Funktion namens produktHinzufuegen, die ein Produkt zur Einkaufsliste hinzufügt. 
// Die Funktion sollte den Namen des Produkts als Parameter nehmen und das Produkt zum Array hinzufügen.
function produktHinzufuegen(produkt) {
    einkaufsliste.push(produkt);
}


// 3: Schreibe eine Funktion namens produktEntfernen, die ein Produkt von der Einkaufsliste entfernt. 
// Die Funktion sollte den Namen des zu entfernenden Produkts als Parameter nehmen und das Produkt aus dem Array entfernen.
function produktEntfernen(produkt) {
    einkaufsliste.pop(produkt);
}

// 4: Schreibe eine Funktion namens listeAusgeben, die alle Produkte in der Einkaufsliste ausgibt.
// Verwende eine if-else-Anweisung, um zu überprüfen, ob die Einkaufsliste leer ist. Wenn sie leer ist, 
// gib aus: "Die Einkaufsliste ist leer." Andernfalls gib aus: "Einkaufsliste: " und dann die Liste der Produkte.
function listeAusgeben() {
    if(einkaufsliste.length > 0){
        console.log("Einkaufsliste: ")
        for(let produkt of einkaufsliste){
            console.log(produkt);
        }
    } else {
        console.log("Die Einkaufsliste ist leer.")
    }
}



// 5: Nutze einen for-loop, um durch die Einkaufsliste zu iterieren und die Produkte auszugeben.



// 6: Teste dein Programm, indem du Produkte hinzufügst, einige entfernst und die Einkaufsliste ausgibst.
produktHinzufuegen("Milch");
produktHinzufuegen("Butter");
console.log(einkaufsliste);
produktEntfernen("Milch");
console.log(einkaufsliste);
listeAusgeben();