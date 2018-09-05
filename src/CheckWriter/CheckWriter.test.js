import convertNumber from './CheckWriter';

describe('Check Writer', () => {
  test('Hundreds and cents', async () => {
    const result = 'One hundred twelve Euros and ten cents';
    expect(convertNumber('112.10')).toEqual(result);
  });

  test('Hundred thousand and cents', async () => {
    const result = 'Eight hundred seventy four thousand three hundred twenty seven Euros and ninety cents';
    expect(convertNumber('874327.9')).toEqual(result);
  })

  test('Hundreds', async () => {
    const result = 'Nine hundred seventy eight Euros and zero cents';
    expect(convertNumber('978')).toEqual(result);
  })

  test('One euro and one cent', async () => {
    const result = 'One Euro and one cent';
    expect(convertNumber('1.01')).toEqual(result);
  })

  test('Fail case', async () => {
    const result = 'The amount must be smaller than one million euros';
    expect(convertNumber('666666666')).toEqual(result);
  })

  test('Empty string', async () => {
    const result = '';
    expect(convertNumber('')).toEqual(result);
  })
})
