import { MoneyValueObject } from './MoneyValueObject';

describe('MoneyValueObject', () => {
  it('should create money for valid amount', () => {
    const money = new MoneyValueObject(120);

    expect(money.amount).toBe(120);
  });

  it('should allow up to two decimal places', () => {
    const money = new MoneyValueObject(99.99);

    expect(money.amount).toBe(99.99);
  });

  it('should fail when amount is not finite', () => {
    expect(() => new MoneyValueObject(Number.NaN)).toThrow(
      'amount must be a finite number',
    );
  });

  it('should fail when amount is less than or equal to zero', () => {
    expect(() => new MoneyValueObject(0)).toThrow(
      'amount must be greater than zero',
    );
  });

  it('should fail when amount has more than two decimals', () => {
    expect(() => new MoneyValueObject(10.123)).toThrow(
      'amount must have at most 2 decimal places',
    );
  });
});
