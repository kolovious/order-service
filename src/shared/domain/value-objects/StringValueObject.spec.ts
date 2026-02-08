import { StringValueObject } from './StringValueObject';

describe('StringValueObject', () => {
  it('should create normalized value', () => {
    const valueObject = new StringValueObject(' customer_1 ');

    expect(valueObject.value).toBe('customer_1');
  });

  it('should fail when value is empty', () => {
    expect(() => new StringValueObject('   ')).toThrow('value is required');
  });
});
