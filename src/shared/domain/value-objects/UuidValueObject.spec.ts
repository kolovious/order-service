import { UuidValueObject } from './UuidValueObject';

describe('UuidValueObject', () => {
  it('should create value object for valid uuid v4', () => {
    const valueObject = new UuidValueObject(
      '550e8400-e29b-41d4-a716-446655440000',
    );

    expect(valueObject.value).toBe('550e8400-e29b-41d4-a716-446655440000');
  });

  it('should fail for invalid uuid', () => {
    expect(() => new UuidValueObject('order_1')).toThrow(
      'value must be a valid UUID v4',
    );
  });
});
