const arrondir = (x) => Math.round(x * 100) / 100;

export const celsiusVersFahrenheit = (c) => arrondir((c * 9) / 5 + 32);
export const fahrenheitVersCelsius = (f) => arrondir(((f - 32) * 5) / 9);
export const celsiusVersKelvin = (c) => arrondir(c + 273.15);
export const kelvinVersCelsius = (k) => arrondir(k - 273);

// Conversion générique : on passe toujours par les degrés Celsius
const versCelsius = { C: (x) => x, F: fahrenheitVersCelsius, K: kelvinVersCelsius };
const depuisCelsius = { C: (x) => x, F: celsiusVersFahrenheit, K: celsiusVersKelvin };

export function convertir(valeur, de, vers) {
  if (!(de in versCelsius) || !(vers in depuisCelsius)) {
    throw new Error(`Unité inconnue : ${!(de in versCelsius) ? de : vers}`);
  }
  return depuisCelsius[vers](versCelsius[de](valeur));
}
