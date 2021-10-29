/* Palidroma:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */

//DONE=>1.inserisco un prompt per chiedere la parola all'utente
//DONE=>1.1.faccio si che la parola venga inserita in una variabile
//DONE=>1.2faccio si che la parola inserita venga girata tramite una funzione
//DONE=>inserisco questultima in un altra variabile
//2.DONE=> comparo le due parole tramite una funzione 
//2.1DONE=>se la parola inserita dall'utente e uguale alla parola girata
//2.2DONE=> stampo "si la parola inserita e palindroma"
//2.3DONE=> altrimenti stampo no la parola non è palindroma

var parolaInserita = prompt("inserisci una parola");
var parolainversa = invertiParola(parolaInserita);

if (comparaParola(parolaInserita, parolainversa)) {
    console.log("si la parola inserita e palindroma");
}else {
    console.log("no la parola inserita e palindroma");
}


//FUNZIONI

    function invertiParola(stringa) {
        var stringaInversa =
            stringa.split('').reverse().join('');
        return stringaInversa;
    }

    function comparaParola(stringa1, stringa2) {
        var controllo =
            stringa1 == stringa2;
        return controllo;
    }