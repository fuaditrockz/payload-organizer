const { emailRegex, errorResponse } = require('../helpers')

exports.validateRegular = payload => {
  if (!payload.email || !payload.password) {
    switch ('undefined') {
      case typeof payload.email:
        return errorResponse(
          'Email is empty',
          !payload.email ? 'No email' : payload.email
        )
      case typeof payload.password:
        return errorResponse(
          'Password is empty',
          !payload.password ? 'No password' : payload.password
        )
      default:
        break
    }
  } else {
    const isEmail = emailRegex.test(payload.email)
    const isPasswordMatch = payload.password === payload.confirmation_password
    if (!isEmail) {
      return errorResponse(
        `${payload.email} is not an email`,
        payload.email
      )
    } else if(!isPasswordMatch) {
      return errorResponse(
        `Password doesn't match`,
        payload.confirmation_password
      )
    }
    return payload
  }
}
