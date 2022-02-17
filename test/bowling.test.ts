import { scoreInput } from '../src/index'

// const EXAMPLE = '165/251/x2/71xx1/7';

const range = (start:number, end:number) => Array.from(Array(end - start + 1).keys()).map(x => x + start);

describe('#scoreInput', () => {
  const testExpected = (name:string, input:string, expected:number) => {
    test(`${name} '${input}' should score as: ${expected}`, () => {
      expect(scoreInput(input)).toBe(expected)
    });
  }

  const SIMPLE = '15345471819005531226'; // 72

  testExpected('simple', SIMPLE, 72);

  const SIMPLE_WITH_SPARE = '1/345471819005531226'; // SIMPLE+4+3 => 79
  testExpected('simple with spare', SIMPLE_WITH_SPARE, 79);

  const WITH_SPARE = '7/000000000000000000'; 
  testExpected('with spare', WITH_SPARE, 10);

  const WITH_SPARE_SPARE = '8/8/0000000000000000';
  testExpected('with spare spare', WITH_SPARE_SPARE, 28);

  const WITH_STRIKE = 'x000000000000000000';
  testExpected('with strike', WITH_STRIKE, 10);

  const WITH_DOUBLE = 'xx00000000000000000';
  testExpected('with double', WITH_DOUBLE, 30);

  const WITH_TURKEY = 'xxx000000000000000';
  testExpected('with a turkey', WITH_TURKEY, 60);

  const A_300_GAME = 'xxxxxxxxxxxx';
  testExpected('A 300 game', A_300_GAME, 300);

  const A_299_GAME = 'xxxxxxxxxxx9';
  testExpected('A 299 game', A_299_GAME, 299);

  const TEN_STRIKES_ZEROS = 'xxxxxxxxxx00';
  testExpected('Ten strikes, then 2 zeros', TEN_STRIKES_ZEROS, 270);

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
