/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//facciamo inserire un numero da 1 a 5 all'utente
//facciamo inserire pari o dispari  all'utente
//generiamo sempre un numero da 1 a 5 per il computer tramite una funzione
//sommiamo le due somme uscite 
    //sommiamo la somma dei numeri estratti 
        //confrontiamo le scelte con la somma  tramite funzione
        //stampiamo il vincitore

var numeroUtente = parseInt(prompt("inserisci un numero compreso tra  1 a 5"));
var SceltaUtente = prompt("sclegli pari o dispari");
var computerscelta =[generaNumero];
console.log(numeroUtente,SceltaUtente,);

let inumeriscelti =sommaInumeri(numeroUtente,computerscelta,computerscelta);
    if(SceltaUtente === controlloParidisp(inumeriscelti)){
        console.log(" bravo hai vinto");
    }else {
        console.log("mi dispiace ha vinto il computer");
    };
        

        





//FUNZIONI  

function generaNumero (){
    return Math.floor(Math.random() * 5) + 1;
}

function sommaInumeri(somma1,somma2){
    let somma = somma1 + somma2;
    return somma;
}

function controlloParidisp(numerisommati){

    let risultato;
    if(numerisommati % 2 === 0){
        risultato = "pari";
    }else{
        risultato = "dispari"
    }
    return risultato;
}

