let caffe = prompt ('ho il caffe?');

/* if (condizione) {+istruzione es:alert}*/
/*if (caffe === 'si' || caffe === 'SI' || caffe === 'Si' || caffe === 'sI') {
    alert ('lo metto nella moka');
} else { alert ('vado a comprarlo');}
*/

/* while (condizione) {istruzione}*/

while (caffe != 'si') {
    caffe = prompt ('ho il caffe?');
}

alert ('lo metto nella moka');

alert ('metto l\'acqua nella moka');

let acqua = prompt ('ho abbastanza acqua?');

while (acqua != 'si') {
    acqua = prompt ('ho abbastanza acqua');
}

alert ('il caffè è pronto!');

let zucchero = prompt ('vuoi dello zucchero?');

/*
var si = input.toLowerCase (si) === 'si';
var no = input.toLowerCase (no) === 'no';

if (zucchero === si) {
    alert ('eccoti lo zucchero');
} else { alert ('bevitelo amaro');}*/


if (zucchero === 'si' || zucchero === 'SI' || zucchero === 'Si' || zucchero === 'sI') {
    alert ('eccoti lo zucchero');
} else { alert ('bevitelo amaro');}
