import test from 'node:test';
import assert from 'assert/strict';

import { concatStrings, isString, identifySign, reverseWords, wordsCount } from '../index.js'

test('concatStrings', () => {
    assert.strictEqual(concatStrings('Hello, ', 'Hexlet'), 'Hello, Hexlet');
    assert.strictEqual(concatStrings('You ', 'win'), 'You win');
});

test('isString', () => {
    assert.strictEqual(isString('str'), true);
    assert.strictEqual(isString(-100), false);
    assert.strictEqual(isString(undefined), false);
});

test('identifySign', () => {
    assert.strictEqual(identifySign(0), 'Ноль');
    assert.strictEqual(identifySign(4), 'Положительное число');
    assert.strictEqual(identifySign(-6), 'Отрицательное число');
});

test('reverseWords', () => {
    assert.strictEqual(reverseWords('Hexlet Hello'), 'Hello Hexlet');
    assert.strictEqual(reverseWords('foo bar'), 'bar foo');
    assert.strictEqual(reverseWords('What`s up!'), 'up! What`s');
    assert.strictEqual(reverseWords('Hello'), 'Hello');
});

test('wordsCount', () => {
    assert.strictEqual(wordsCount('Hexlet Hello'), 2);
    assert.strictEqual(wordsCount('I love programming'), 3);
    assert.strictEqual(wordsCount(''), 0);
    assert.strictEqual(wordsCount('foo'), 1);
});
