// es 1

/*let gattinitot = 44;
let gattiniinfila = 4;

let file = Math.trunc(gattinitot / gattiniinfila);

let gattifuori = Math.trunc(gattiniinfila % gattinitot);

let gattimancanti = Math.trunc(file - gattifuori);

console.log(`Ci sono ${gattinitot} file di gatti e ne mancano ${gattimancanti} per una nuova fila, con un avanzo di ${gattifuori}`);*/

// es 2
/*
let voto = prompt('inserisci il tuo voto');

let ageNumber = parseInt(voto)

console.log(voto);

if (voto < 18) {
    console.log('insufficiente');
} else if (voto >= 18 && voto < 21) {
    console.log('sufficiente');
} else if (voto >= 21 && voto < 24) {
    console.log('buono');
} else if (voto >= 24 && voto < 27) {
    console.log('distinto');
} else if (voto >= 27 && voto < 29) {
    console.log('ottimo');
} else if (voto == 30) {
    console.log('eccellente');
} else {
    console.log('voto inserito non valido');
}*/

/*

switch (true) {
    case voto < 18:
        console.log('insufficiente');
        break;
    case voto >= 18 && voto < 21:
        console.log('sufficiente');
        break;
    case voto >= 21 && voto < 24:
        console.log('buono');
        break;
    case voto >= 24 && voto < 27:
            console.log('distinto');
        break;
    case voto >= 27 && voto < 29:
            console.log('ottimo');
        break;
    case voto == 30:
            console.log('eccellente');
        break;
    case voto > 30:
            console.log('voto inserito non valido');
        break;
    default:
        console.log('voto inserito non valido');
        break;
}*/

// es 3

let temp = prompt('che temperatura hai?')
/*
if (temp < -10) {
    console.log('copriti…ancora ti raffreddi');
} else if (temp < 0) {
    console.log('non è tanto il freddo quanto l\'umidità');
} else if (temp < 20) {
    console.log('non ci sono piu’ le mezze stagioni');
} else if (temp < 30) {
    console.log('mi dia una peroni sudata');
} else if (temp >= 30) {
    console.log('lu mare, lu sole, lu ientu');
} else {
    console.log('');
}*/



switch (true) {
    case temp < -10:
        console.log('copriti…ancora ti raffreddi');
        break;
    case temp < 0:
        console.log('non è tanto il freddo quanto l\'umidità');
        break;
    case temp < 20:
        console.log('non ci sono piu’ le mezze stagioni');
        break;
    case temp < 30:
            console.log('mi dia una peroni sudata');
        break;
    case temp >= 30:
            console.log('lu mare, lu sole, lu ientu');
        break;
    default:
      
        break;
}

