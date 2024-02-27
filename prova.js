// number
let temp = 18;

console.log(temp);
//parseInt
/*let test = test.parseInt() ;
console.log(test);*/

// Incremento - Decremento
let num1 = 5;
num1++; // num1 + 1

console.log(num1);

let Num2 = 5;
Num2--;

console.log(Num2);

let a = 100;
let b = 200;
let c = a + b;

console.log(c);

// typeof (operatore unario)
let text = 'ciao0';
console.log(typeof text);

// Opertatore Overloading: +
// String
let text1 = 'ciao sono';
let text2 = ' Marco'; 
let text3 = text1 + text2

console.log(text3);

/*console.log(text1+text2); senza text3*/

// Template Literal: String Interpolation ${}

// .toUppercase()
let fullname = 'nicola';

console.log(fullname.toUpperCase());

// .toLowerCase()

let name = 'ELIA';

console.log(name.toLowerCase());

// Boolean
let x = true;
let y = false;

console.log(typeof y);

// console.log( 1 == 1 );

// Truthy or Falsy
let randomNumber = 5;
console.log(Boolean(randomNumber));

// null: assenza di valore di un oggetto
let main = document.querySelector('main');
console.log(main);

// undefiner
let email;

console.log(email);

// type Coercion
let city = 'milano';

// Implicito
console.log( 2 + '5');

// Esplicita 
let text4 = 'mi chiamo';
console.log(Boolean(text4));

// Array
let myarray = [11, 'ciao', 100, true, [90, 77, 'Nicola']];

console.log(myarray);

// Accedere ad un singolo elemento
console.log(myarray[4][2]);

// Lunghezza Array
console.log(myarray.length);

// Medodi degli array
// .push()
let arrayVuoto = [];
arrayVuoto.push(10, 'ehi', 56);

arrayVuoto.push('eccoti');

console.log(arrayVuoto);

// .pop()
arrayVuoto.pop();

console.log(arrayVuoto);