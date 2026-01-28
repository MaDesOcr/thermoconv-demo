import { test } from 'node:test';
import assert from 'node:assert/strict';
import { celsiusVersFahrenheit, fahrenheitVersCelsius, celsiusVersKelvin, convertir } from '../src/conversions.js';

test('Celsius ↔ Fahrenheit', () => {
  assert.equal(celsiusVersFahrenheit(100), 212);
  assert.equal(fahrenheitVersCelsius(32), 0);
});

test('Celsius → Kelvin', () => {
  assert.equal(celsiusVersKelvin(0), 273.15);
});

test('convertir', () => {
  assert.equal(convertir(100, 'C', 'F'), 212);
  assert.throws(() => convertir(1, 'X', 'C'), /X/);
});

test('zéro absolu', () => {
  assert.throws(() => celsiusVersKelvin(-300), RangeError);
});
