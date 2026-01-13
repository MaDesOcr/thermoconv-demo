import { test } from 'node:test';
import assert from 'node:assert/strict';
import { celsiusVersFahrenheit, fahrenheitVersCelsius } from '../src/conversions.js';

test('Celsius ↔ Fahrenheit', () => {
  assert.equal(celsiusVersFahrenheit(100), 212);
  assert.equal(fahrenheitVersCelsius(32), 0);
});
