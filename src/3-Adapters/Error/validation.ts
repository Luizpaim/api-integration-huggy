export class RequiredFieldError extends Error {
  constructor(fieldName?: string) {
    const globalRequired = "GLOBAL.ERRORS.REQUIRED_FIELD";
    const message = !fieldName ? `${globalRequired}.ANY` : `${globalRequired}.${fieldName.toUpperCase()}`;
    super(message);
    this.name = "RequiredFieldError";
  }
}

