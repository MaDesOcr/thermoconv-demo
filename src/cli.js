import { convertir } from './conversions.js';

const [valeur, de = 'C', vers = 'F'] = process.argv.slice(2);
const resultat = convertir(Number(valeur), de, vers);
console.log(`${valeur} ${de} = ${resultat} ${vers}`);
