const isSpare = (x:string) => x === '/';

const isStrike = (x:string) => x === 'x';

const getValue = (x:string) => {
  if (isStrike(x)) return 10;
  // TODO: handle invalid input
  return Number(x);
};

const getThrows = (input:string) => {
  const asArray = input.split('');

  const throws = asArray.map((raw, index) => {
    if (isSpare(raw)) {
      const prev = asArray[index - 1];
      if (!prev) throw new Error(`Invalid input at ${index}`);
      return {
        raw,
        value: 10 - getValue(prev),
      };
    }
    if (isStrike(raw)) {
      return {
        raw,
        value: 10,
      };
    }
    return {
      raw,
      value: Number(raw),
    };
  });
  return throws;
}

export const scoreInput = (input:string) => {

  const throws = getThrows(input);

  // console.log('throws :>> ', throws);

  let score = 0;
  throws.forEach((t, index) => {
    if (!isSpare(t.raw) && !isStrike(t.raw)) {
      score += t.value;
    } else if (isSpare(t.raw)) {
      score += t.value;
      const nextThrow = throws[index + 1];
      // Check for 10th frame scenario
      const nextNextThrow = throws[index + 2];
      if (!!nextThrow && !!nextNextThrow) {
        score += nextThrow.value;
      }
    } else if (isStrike(t.raw)) {
      score += 10;
      const nextThrow = throws[index + 1];
      const nextNextThrow = throws[index + 2];

      if (nextThrow) {
        score += nextThrow.value;
      }
      if (nextNextThrow) {
        score += nextNextThrow.value;
      }
    }
  });
  return score;
}
