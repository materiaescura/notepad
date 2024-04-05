export function valid(email: string): boolean {
  return !isEmpty(email)
}

function isEmpty(str: string): boolean {
  return !str ? true : false
}
