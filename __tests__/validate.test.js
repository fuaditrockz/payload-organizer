const { validateRegular  } = require('../src/options/validate')
const { errorResponse } = require('../src/helpers')

describe('validate prop', () => {
  describe(`validate -> type: "regular"`, () => {
    test(`Validated payload`, () => {
      const data = {
        email: 'adit@gmail.com',
        password: '123456',
        confirmation_password: '123456'
      }
      const mock = validateRegular(data)
      expect(mock).toMatchObject(data)
    })

    test(`If don't have an email`, () => {
      const data = {
        password: '123456',
        confirmation_password: '123456'
      }
      const mock = validateRegular(data)
      expect(mock).toMatchObject(errorResponse(
        'Email is empty',
        'No email'
      ))
    })

    test(`If don't have an password`, () => {
      const data = {
        email: 'adit@gmail.com',
        confirmation_password: '123456'
      }
      const mock = validateRegular(data)
      expect(mock).toMatchObject(errorResponse(
        'Password is empty',
        'No password'
      ))
    })

    test(`If email value not an email`, () => {
      const data = {
        email: 'aditgmail.com',
        password: '123456',
        confirmation_password: '123456'
      }
      const mock = validateRegular(data)
      expect(mock).toMatchObject(errorResponse(
        `${data.email} is not an email`,
        data.email
      ))
    })

    test(`If password doesn't match`, () => {
      const data = {
        email: 'adit@gmail.com',
        password: '12345',
        confirmation_password: '123456'
      }
      const mock = validateRegular(data)
      expect(mock).toMatchObject(errorResponse(
        `Password doesn't match`,
        data.confirmation_password
      ))
    })
  })
})