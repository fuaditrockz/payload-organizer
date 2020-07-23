# payload-organizer
Hello from Indonesia! A tools to setup data for **push-ready**.

Install dependency;
```
> npm install --save payload-organizer
```

##### What's the problem behind it?
So many tasks that you must do before push fix-data into database, or return fix-data to another task that you wannna do. Simple solution if you use `payload-organizer`. Only setup the beta-object that you wanna mutating before push/save or return it as fix-data.

## Auth
> ###### Problem
> For example if you wanna make the **register** data payload. You need to;
> 1. Validate the payload.
> 2. Hashing password.
> 3. Sending email.
> 4. Create the token.
> 5. And another conditions that you must set to fix the data object.

> ###### Solution
> You don't have to do all of the above. You only need to setup the temporary form data and let us do the rest.

#### `Auth({data, options})`
`data` is a bunch of your temporary data.

`options`:
* `validate`
  > Option to run a validation on your `data` object.
  > default: **`false`**
* `hashingPassword`
  > Option to hashing `password` object prop.
  > default: **`false`**
* `generateToken`
  > Option to add token prop on your `data` object.
  > default: **`false`**
* `emailProvider`

##### `fix()` 
```javascript
// Your temporary data object
const objectOfYourData = {
  name: 'Fuadit Muhammad',
  email: 'muhammadfuaditrockz@gmail.com',
  password: 'qwerty123',
  confirmation_password: 'qwerty123'
}
```
```javascript
const { Auth } = require('payload-organizer);

const registerPayload = new Auth({
  data: { ...objectOfYourData }, // rest of your data
  options: {
    validate: true,
    hashingPassword: true,
    generateToken: true,
    emailProvider: {
      // Set of your email provider here. Such as; sendgrid etc.,
    }
  }
});

const fixData = registerPayload.fix();
console.log(fixData); // will return push-ready object of dataset.
```
Output:
```javascript
{
  name: 'Fuadit Muhammad',
  email: 'muhammadfuaditrockz@gmail.com',
  password: '3fc0a7acf087f549ac2b266baf94b8b1',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  is_verified: false
}
```

## Author
[Fuadit Muhammad](https://github.com/fuaditrockz)

## License
This project is licensed under the MIT license. See the [LICENSE](https://github.com/fuaditrockz/payload-organizer/blob/master/LICENSE) file for more info.