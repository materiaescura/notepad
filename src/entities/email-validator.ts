export function valid(email: string): boolean {
  const maxEmailSize = 320
  const validators = [
    isEmpty,
    nonConformant,
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

function nonConformant(email: string): boolean {
  const emailRegex =
    /^[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

  return !emailRegex.test(email)
}
