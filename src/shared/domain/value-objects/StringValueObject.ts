import { ValueObject } from './ValueObject';

export class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    const normalizedValue = value.trim();
    if (normalizedValue.length === 0) {
      throw new Error('value is required');
    }

    super(normalizedValue);
  }
}
