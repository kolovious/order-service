import { ValueObject } from './ValueObject';

export class MoneyValueObject extends ValueObject<number> {
  constructor(amount: number) {
    if (!Number.isFinite(amount)) {
      throw new Error('amount must be a finite number');
    }

    if (amount <= 0) {
      throw new Error('amount must be greater than zero');
    }

    if (!MoneyValueObject.hasAtMostTwoDecimals(amount)) {
      throw new Error('amount must have at most 2 decimal places');
    }

    super(amount);
  }

  private static hasAtMostTwoDecimals(value: number): boolean {
    return Math.round(value * 100) === value * 100;
  }

  get amount(): number {
    return this.value;
  }
}
