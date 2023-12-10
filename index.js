export const concatStrings = (a, b) => {
    return (a + b);
};

export const isString = (str) => {
    return typeof str === 'string';
};

export const identifySign = (num) => {
    if (num === 0) {
        return 'Ноль';
    } else if (num > 0) {
        return 'Положительное число';
    } else {
        return 'Отрицательное число';
    }
};

export const reverseWords = (text) => {
    return text.split(' ').reverse().join(' ')
};

export const wordsCount = (text) => {
    if (text === '') {
        return 0;
    } return text.split(' ').length;
};


console.log(wordsCount('Hexlet Hello'))
