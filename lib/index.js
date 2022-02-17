'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isSpare = function (x) { return x === '/'; };
var isStrike = function (x) { return x === 'x'; };
var getValue = function (x) {
    if (isStrike(x))
        return 10;
    // TODO: handle invalid input
    return Number(x);
};
var getThrows = function (input) {
    var asArray = input.split('');
    var throws = asArray.map(function (raw, index) {
        if (isSpare(raw)) {
            var prev = asArray[index - 1];
            if (!prev)
                throw new Error("Invalid input at ".concat(index));
            return {
                raw: raw,
                value: 10 - getValue(prev),
            };
        }
        if (isStrike(raw)) {
            return {
                raw: raw,
                value: 10,
            };
        }
        return {
            raw: raw,
            value: Number(raw),
        };
    });
    return throws;
};
var scoreInput = function (input) {
    var throws = getThrows(input);
    // console.log('throws :>> ', throws);
    var score = 0;
    throws.forEach(function (t, index) {
        if (!isSpare(t.raw) && !isStrike(t.raw)) {
            score += t.value;
        }
        else if (isSpare(t.raw)) {
            score += t.value;
            var nextThrow = throws[index + 1];
            // Check for 10th frame scenario
            var nextNextThrow = throws[index + 2];
            if (!!nextThrow && !!nextNextThrow) {
                score += nextThrow.value;
            }
        }
        else if (isStrike(t.raw)) {
            score += 10;
        }
    });
    return score;
};

exports.scoreInput = scoreInput;
