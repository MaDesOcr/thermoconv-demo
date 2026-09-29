import { convertir } from './conversions.js';

const [valeur, de = 'C', vers = 'F'] = process.argv.slice(2);
const resultat = convertir(Number(valeur), de, vers);
if (process.argv.includes('--json')) console.log(JSON.stringify({ valeur: Number(valeur), de, vers, resultat }));
else console.log(`${valeur} ${de} = ${resultat} ${vers}`);
