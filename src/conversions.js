const arrondir = (x) => Math.round(x * 100) / 100;

export const celsiusVersFahrenheit = (c) => arrondir((c * 9) / 5 + 32);
export const fahrenheitVersCelsius = (f) => arrondir(((f - 32) * 5) / 9);
export const celsiusVersKelvin = (c) => arrondir(c + 273.15);
export const kelvinVersCelsius = (k) => arrondir(k - 273);
