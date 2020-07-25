class Organizer {
  constructor(props) {
    this.props = props
  }

  validate(data, options) {
    console.log(1)
    switch (options.validate.type) {
      case 'regular':
        console.log('2.a')
        if (!data.email || !data.password) {
          console.log('3.a')
          switch ('undefined') {
            case typeof data.email:
              console.log('4.a')
              return 'No email'
            case typeof data.password:
              console.log('4.b')
              return 'No password'
            default:
              console.log('4.c')
              return 'Unidentification'
          }
        } else {
          console.log('3.b')
          return 'Good job'
        }
      default:
        console.log('2.b')
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
  password: '123456'
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