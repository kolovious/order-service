export abstract class ValueObject<TValue> {
  protected constructor(private readonly _value: TValue) {}

  get value(): TValue {
    return this._value;
  }

  equals(other: ValueObject<TValue>): boolean {
    return this._value === other.value;
  }
}
