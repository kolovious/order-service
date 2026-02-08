import { StringValueObject } from './StringValueObject';

const UUID_V4_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export class UuidValueObject extends StringValueObject {
  constructor(value: string) {
    super(value);

    if (!UUID_V4_REGEX.test(this.value)) {
      throw new Error('value must be a valid UUID v4');
    }
  }
}
