/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/*
function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) * 3;
    } else {
        return num1 + num2;
    }
}

let result1 = crazySum(2, 5);
console.log(result1);          //Output dell'else = 7

let result2 = crazySum(5, 5);
console.log(result2);          //Output dell'if = 30
*/
 

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/*
function boundary(n) {
    if ((n >= 20 && n <= 100) || n === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(35));   //Output = True
console.log(boundary(150));  //Output = False
console.log(boundary(400));  //Output = True
*/


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*
function reverseString(str) {
    //Variabile stringa vuota
    let newString = "";
    //Ciclo for che partendo dall'ultima lettera della parola data riempie la variabile sopra
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    //Restituisci la stringa invertita
    return newString;
}
let reversed = reverseString("EPICODE");
console.log(reversed); //Output = EDOCIPE
*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/*
function upperFirst(input) {
    let words = input.split(' ');

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    let modifiedString = words.join(' ');
    console.log(modifiedString);
}

// Esempio di utilizzo con la tua frase
upperFirst("Sopra la panca la capra campa, sotto la panca la capra crepa");
*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/*
function giveMeRandom(n) {
    var randomArray = [];

    for (var i = 0; i < n; i++) {
        var randomNumber = Math.floor(Math.random() * 11); // Genera un numero random tra 0 e 10
        randomArray.push(randomNumber);
    }

    return randomArray;
}

var randomNumbers = giveMeRandom(7);
console.log(randomNumbers);
*/




//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*
function area(l1, l2) {
    return l1 * l2;
}

// Esempio:
var lunghezza1 = 5;
var lunghezza2 = 10;
var risultato = area(lunghezza1, lunghezza2);
console.log(risultato);  // Output: 50
 */


/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* 
function codify(str) {
    if (str.startsWith("code")) {
        return str;  // Se la stringa inizia già con "code", ritornala senza modifiche
    } else {
        return "code" + str;  // Altrimenti, aggiungi "code" all'inizio della stringa
    }
}

// Esempio:
console.log(codify("epic"));  // Output: "codeexample"
console.log(codify("codeNew") // Output: "codeNew" senza aggiunta*/


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*
function check3and7(number) {
    return (number % 3 === 0 || number % 7 === 0);
}

// Esempi:
console.log(check3and7(9));  // Output: true 
console.log(check3and7(14)); // Output: true 
console.log(check3and7(5));  // Output: false
*/


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/*
function cutString(input) {
    if (input.length < 2) {
        return "La stringa è troppo corta per essere tagliata.";
    }

    return input.slice(1, -1);
}

// Esempi di utilizzo:
console.log(cutString("esempio"));  // Output: "sempi"
console.log(cutString("a"));        // Output: "La stringa è troppo corta per essere tagliata."
*/
