const { options: optionMethods } = require('./src')
const { validate } = optionMethods

class Organizer {
  constructor(props) {
    this.props = props
  }

  validate(data, options) {
    switch (options.validate.type) {
      case 'regular':
        return validate.validateRegular(data)
      default:
        break
    }
  }

  fix() {
    const { data, options } = this.props
    if (options.validate) {
      return this.validate(data, options)
    }
  }
}

const yourDataObject = {
  email: null,
  password: '123456',
  confirmation_password: '123456'
}

const test = validate.validateRegular(yourDataObject)
console.log(test)
const fixData = new Organizer({
  data: yourDataObject,
  options: {
    validate: {
      type: 'regular'
    },
    hashingPassword: true,
    generateToken: true
  }
});

console.log(fixData.fix())