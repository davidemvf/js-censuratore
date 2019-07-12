// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

//tramite prompt dò la possibilità all'utente di inserire un testo e le parole da censurare; 
var lorem = prompt("Inserire il testo:");
var censurate = prompt("Inserire parole da censurare:");

//richiamo la funzione
censuratore(lorem, censurate);


// funzione utilizzata:

function censuratore(testo, censure) {

// converto il testo in array e controllo se uno dei suoi elementi è contenuto nell' array delle parole censurate. Inizializzo la variabile sostitute per contare il numero di parole censurate
var testoArray = testo.split(" ");
var censArray = censure.split(" ");
var sostituite = 0;

// censuro le badwords
for (var i = 0; i < testoArray.length; i++) {
  if (censArray.includes(testoArray[i])) {
    testoArray[i] = "xxx";
    sostituite++ ;
  }
}

// trasformo l'array di testo con le parole censurate in dato di tipo stringa
var testoCensurato = testoArray.join(" ");

// visualizzo tramite console
console.log(testoArray);
console.log("Testo censurato:", testoCensurato);
console.log("Numero di parole sostitute:", sostituite);

// calcolo e visualizzo il badword index
var index = (sostituite / testo.length);
console.log("Badword index:", index);

return testoCensurato;

}
