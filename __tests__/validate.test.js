const { validateRegular, validateRegister } = require('../src/options/validate')
const { errorResponse } = require('../src/helpers')

let regularData
let registerData

describe('options -> validate: true || Object', () => {
  describe(`validate -> type: "regular"`, () => {
    beforeEach(() => {
      regularData = {
        email: 'adit@gmail.com',
        password: '123456',
        confirmation_password: '123456'
      }
    })

    test(`Validated payload`, () => {
      const mock = validateRegular(regularData)
      expect(mock).toMatchObject(regularData)
    })

    test(`If don't have an email`, () => {
      regularData.email = null
      const mock = validateRegular(regularData)
      expect(mock).toMatchObject(errorResponse(
        'Email is empty',
        'No email'
      ))
    })

    test(`If don't have an password`, () => {
      regularData.password = null
      const mock = validateRegular(regularData)
      expect(mock).toMatchObject(errorResponse(
        'Password is empty',
        'No password'
      ))
    })

    test(`If email value not an email`, () => {
      regularData.email = 'aditmail.com'
      const mock = validateRegular(regularData)
      expect(mock).toMatchObject(errorResponse(
        `${regularData.email} is not an email`,
        regularData.email
      ))
    })

    test(`If password doesn't match`, () => {
      regularData.password = '12345'
      const mock = validateRegular(regularData)
      expect(mock).toMatchObject(errorResponse(
        `Password doesn't match`,
        regularData.confirmation_password
      ))
    })
  })

  describe(`validate -> type: "register"`, () => {
    beforeEach(() => {
      registerData = {
        first_name: 'Fuadit',
        last_name: 'Muhammad',
        email: 'adit@gmail.com',
        password: '123456',
        confirmation_password: '123456'
      }
    })
    test(`Validated payload`, () => {
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(registerData)
    })

    test(`If don't have a first name`, () => {
      registerData.first_name = null
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(errorResponse(
        'Email is empty',
        'No email'
      ))
    })

    test(`If don't have a last name`, () => {
      registerData.last_name = null
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(errorResponse(
        'Email is empty',
        'No email'
      ))
    })

    test(`If don't have an email`, () => {
      registerData.email = null
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(errorResponse(
        'Email is empty',
        'No email'
      ))
    })

    test(`If don't have an password`, () => {
      registerData.password = null
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(errorResponse(
        'Password is empty',
        'No password'
      ))
    })

    test(`If email value not an email`, () => {
      registerData.email = 'aditmail.com'
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(errorResponse(
        `${registerData.email} is not an email`,
        registerData.email
      ))
    })

    test(`If password doesn't match`, () => {
      registerData.password = '12345'
      const mock = validateRegister(registerData)
      expect(mock).toMatchObject(errorResponse(
        `Password doesn't match`,
        registerData.confirmation_password
      ))
    })
  })
})