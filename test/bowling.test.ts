import { scoreInput } from '../src/index'

// const EXAMPLE = '165/251/x2/71xx1/7';

const range = (start:number, end:number) => Array.from(Array(end - start + 1).keys()).map(x => x + start);

describe('#scoreInput', () => {
  const SIMPLE = '15345471819005531226'; // 72
  test(`simple '${SIMPLE}'`, () => {
    expect(scoreInput(SIMPLE)).toBe(72)
  });

  const WITH_SPARE = '1/345471819005531226'; // +4+3 => 79
  test(`with spare '${WITH_SPARE}'`, () => {
    expect(scoreInput(WITH_SPARE)).toBe(79)
  });

  const ALL_9_SPARES = '9/9/9/9/9/9/9/9/9/9/';
  // 19 38 57 76 95 114 133 152 171 181

  const TABLE_9_SPARES_X = range(0, 9).map(x => {
    return {
      input: `${ALL_9_SPARES}${x}`,
      expected: 181 + x,
    }
  })

  describe.each(TABLE_9_SPARES_X)('with all spares [$input]', ({input, expected}) => {
    test(`returns ${expected}`, () => {
      expect(scoreInput(input)).toBe(expected);
    });
  });

  const ALL_5_SPARES = '5/5/5/5/5/5/5/5/5/5/';
  // 15 30 45 60 75 90 105 120 135 145

  const TABLE_5_SPARES_X = range(0, 9).map(x => {
    return {
      input: `${ALL_5_SPARES}${x}`,
      expected: 145 + x,
    }
  });

  describe.each(TABLE_5_SPARES_X)('with all spares [$input]', ({input, expected}) => {
    test(`returns ${expected}`, () => {
      expect(scoreInput(input)).toBe(expected);
    });
  });
});
