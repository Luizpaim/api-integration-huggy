/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Validator } from "@/3-Adapters/Validation";
import { RequiredFieldError } from "@/3-Adapters/Error";

export class Required implements Validator {
  constructor(readonly value: any, readonly fieldName?: string) {}

  validate(): Error | undefined {
    if (this.value === null || this.value === undefined) {
      return new RequiredFieldError(this.fieldName);
    }
    return undefined;
  }
}

export class RequiredString extends Required {
  constructor(readonly value: string, readonly fieldName?: string) {
    super(value, fieldName);
  }

  validate(): Error | undefined {
    if (super.validate() !== undefined || this.value === "") {
      return new RequiredFieldError(this.fieldName);
    }
    return undefined;
  }
}
