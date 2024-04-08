export function valid(email: string): boolean {
  const maxEmailSize = 320
  const validators = [
    isEmpty,
    isTooLarge.bind(null, maxEmailSize),
    domainTooLarge,
  ]

  return validators.every((validator) => validator(email) === false)
}

function isEmpty(str: string): boolean {
  return !str ? true : false
}

function isTooLarge(maxSize: number, str: string): boolean {
  return str.length > maxSize ? true : false
}

function domainTooLarge(email: string): boolean {
  const [_, domain] = email.split('@')
  return isTooLarge(255, domain)
}
