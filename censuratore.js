// - Il software riceve in input un lungo testo e una serie di parole da censurare.
// - Restituisce il testo con xxx al posto delle parole censurate.
// - Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali

var lorem = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var censurate = "sit cupidatat ex ea sunt culpa";

// converto il testo in array e controllo se uno dei suoi elementi è contenuto nell' array delle parole censurate. Inizializzo la variabile sostitute per contare il numero di parole censurate
var testoArray = lorem.split(" ");
var censArray = censurate.split(" ");
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
console.log(testoCensurato);
console.log(sostituite);

// calcolo e visualizzo il badword index
var index = (sostituite / lorem.length);
console.log(index);
