export function valid(email: string): boolean {
  const maxEmailSize = 320
  const validators = [isEmpty, isTooLarge.bind(null, maxEmailSize)]

  return validators.every((validator) => validator(email) === false)
}

function isEmpty(str: string): boolean {
  return !str ? true : false
}

function isTooLarge(maxSize: number, str: string): boolean {
  return str.length > maxSize ? true : false
}
