export function valid(email: string): boolean {
  const maxEmailSize = 320
  const validators = [
    isEmpty,
    isTooLarge.bind(null, maxEmailSize),
    domainTooLarge,
    localTooLarge,
    somePartIsTooLargeIn,
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

function localTooLarge(email: string): boolean {
  const [local, _] = email.split('@')
  return isTooLarge(64, local)
}

function somePartIsTooLargeIn(email: string): boolean {
  const [_, domain] = email.split('@')
  const domainParts = domain.split('.')
  return domainParts.some((part) => part.length > 63)
}
