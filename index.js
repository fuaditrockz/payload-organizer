const { options: optionMethods } = require('./src')

class Organizer {
  constructor(props) {
    this.props = props
  }

  validate(data, options) {
    switch (options.validate.type) {
      case 'regular':
        return optionMethods.validateRegular(data)
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
  email: 'muhammadfuaditrockz@gmail.com',
  password: '123456',
  confirmation_password: '123456'
}

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