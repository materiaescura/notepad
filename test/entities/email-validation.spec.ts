import { valid } from '../../src/entities/email-validator'

describe('Email validation', () => {
  it('should not accept null strings', () => {
    const email = null
    expect(valid(email)).toBeFalsy()
  })
})
