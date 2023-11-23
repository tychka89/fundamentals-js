import test from 'node:test';
import assert from 'assert/strict';

import { isEven, findMax, reverseString, changeCase, isDivisible } from '../index.js'

test('step1', () => {
    assert.strictEqual(isEven(4), true);
    assert.strictEqual(isEven(5), false);
});

test('step2', () => {
    assert.strictEqual(findMax(1, 2, 3), 3);
    assert.strictEqual(findMax(10, 5, 7), 10);
});

test('step3', () => {
    assert.strictEqual(reverseString("hello"), "olleh");
    assert.strictEqual(reverseString("world"), "dlrow");
});

test('step4', () => {
    assert.strictEqual(changeCase("Hello World"), "hELLO wORLD");
    assert.strictEqual(changeCase("JavaScript"), "jAVAsCRIPT");
});

test('step5', () => {
    assert.strictEqual(isDivisible(10, 2), true);
    assert.strictEqual(isDivisible(7, 3), false);
});
