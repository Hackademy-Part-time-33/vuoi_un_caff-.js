// Math: 

const PGRECO = Math.PI;

console.log(PGRECO);

// Abbiamo ricevuto diverse temp da una staz meteo
// Scrivere un programma che ci permetta di calcolare la temp massima e la minima

let temp1 = 15;
let temp2 = 8;
let temp3 = 38;
let temp4 = -2;

let tempMax = Math.max(temp1, temp2, temp3, temp4)
let tempMin = Math.min(temp1, temp2, temp3, temp4)

console.log(`la temperatura massima è ${tempMax}`);
console.log(`la temperatura minima è ${tempMin}`);

// Math ceil

let myNumber = 12.91;
console.log(Math.ceil(myNumber)); // ti restituisce il numero arrotondato per eccesso

// Math.floor

console.log(Math.floor(myNumber)); // ti restituisce il numero arrotondato per eccesso

// Math.round

console.log(Math.round(myNumber)); // restituisce un numero intero arrotondato all'intero più vicino 

// Math.random

console.log(Math.random()); // restituisce sempre un numero casuale tra 0 (incluso) e 1 (escluso)

// OPERATORI DI CONFRONTO: ==, ===, >, <, >=, <=, !=, !==

console.log(2 == 2);
console.log(2 == 3);
console.log(2 == `2`);
console.log(2 === `2`);
console.log(2 != 2); // il punto esclamativo sta indicare la differenza '2 è diverso da 2?'
console.log(2 !== 2);
console.log(10 > 1);
console.log(10 >= 10);
console.log(1 < 2 < 3); // true
console.log(3 > 2 > 1); // true

// OPERATORI LOGICI: &&, ||, !(bang operator)
// truthy: numeri diversi da 0 e diversi da NaN, stringhe NON vuote, true, tutti gli oggetti
// falsy: 0, NaN, stringhe VUOTE, false, null, undefined

// && (and)
// ci restituisce il primo dato falsy che trova, se non ce ne sono vi restiruirà l'ultimo truthy, es:
// si usano nelle condiioni
console.log(10 && true);
console.log(true && 10);
console.log(NaN && 10);
//console.log(10 && NaN);

// || (or)
// ci restituisce il primo dato truthy che trova o se non l'ultimo falsy che trova, es:

console.log(10 && true);
console.log(true && 10);
console.log(NaN && 10);

console.log(100 > 99 && 99 > 98); // in questo entrambe devono essere vero

console.log(100 > 99 || 65 < 1); // per essere true basta che una sola condizione sia  vera

console.log(!(65 < 1));

// CONDIZIONI
//let age = prompt('inserisci i tuoi anni');

/*let ageNumber = parseInt(age)

console.log(ageNumber);

if (ageNumber >= 18 && typeof ageNumber == 'number') {
    // codice che verrà eseguito se la condizione sarà vera
    console.log('puoi prendere la patente');
}  else {
    // codice che verrà eseguito se la condizione risulta falsa
    console.log('non puoi');
}

if (age > 0 && age < 18) {
    // codice che verrà eseguito se la condizione sarà vera
    console.log('sei minorenne');
} else if (age >= 90) {
    console.log('sei anziano');
} else if (age >= 18) {
    console.log('sei amggiorenne');
} else {
    // codice che verrà eseguito se la condizione risulta falsa
    console.log('età inserita non valida');
}*/



// OPERATORE TERNARIO
/*(age >= 18) ? console.log('puoi prendere la patente') : console.log('non puoi');*/


/*let fullname = prompt('inserisci il tuo nome');

let cocktail = prompt('come si chiama il cocktail fatto con questi ingredienti \n -lime \n tequila \n sale fino \n ghiaccio \n triple sec');

if (cocktail.toLocaleLowerCase() == 'margarita') {
    console.log(`complimenti &{fullname} il cocktail è tuo😘`);
}  else {
    console.log(`${fullname} paga da bere`);
}*/

// SWITCH

/*let color = 'yellow'

switch (color) {
    case 'green':
        console.log('colore verde');
        break;
    case 'yellow':
        console.log('colore giallo');
        break;
    case 'red':
        console.log('colore rosso');
        break;
    default:
        console.log('nessuno dei precedenti');
        break;
}*/

let color = prompt('inserisci il colore che stai cercando');

switch (color) {
    case 'green':
    case 'yellow':
    case 'black':
    case 'pink':
        console.log(`il colore ${color} che stai cercando è disponibile`);        
        break;

    default:
        console.log(`il colore non c'è`);
        break;
}














