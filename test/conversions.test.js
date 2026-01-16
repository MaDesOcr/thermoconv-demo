import { test } from 'node:test';
import assert from 'node:assert/strict';
import { celsiusVersFahrenheit, fahrenheitVersCelsius, celsiusVersKelvin } from '../src/conversions.js';

test('Celsius ↔ Fahrenheit', () => {
  assert.equal(celsiusVersFahrenheit(100), 212);
  assert.equal(fahrenheitVersCelsius(32), 0);
});

test('Celsius → Kelvin', () => {
  assert.equal(celsiusVersKelvin(0), 273.15);
});
