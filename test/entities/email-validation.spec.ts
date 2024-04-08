import { valid } from '../../src/entities/email-validator'

describe('Email validation', () => {
  it('should not accept null strings', () => {
    const email = null
    expect(valid(email)).toBeFalsy()
  })

  it('should not accept empty strings', () => {
    const email = null
    expect(valid(email)).toBeFalsy()
  })

  it('should not accept strings larger than 320 chars', () => {
    const email = 'l'.repeat(64) + '@' + 'd'.repeat(128) + '.' + 'd'.repeat(127)
    expect(valid(email)).toBeFalsy()
  })

  it('should not accept domain part larger than 255 chars', () => {
    const email = 'local@' + 'd'.repeat(127) + '.' + 'd'.repeat(128)
    expect(valid(email)).toBeFalsy()
  })
})
