export function valid(email: string): boolean {
  const maxEmailSize = 320
  const validators = [isEmpty]

  return validators.every((validator) => validator(email) === false)
}

function isEmpty(str: string): boolean {
  return !str ? true : false
}
