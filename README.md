# payload-organizer
A tools to setup data for **push-ready**.

##### What's the problem behind it?
There are many things we must do before the data is sent to the database or returned to the user. such as;
1. Validate the payload.
2. Hashing password.
3. Sending email.
4. Return the token.
5. There is so many conditions on there and another extras todos that you have to set for one time API call.

Therefore, a payload-organizer is here to help you finalize the data, before the data is forwarded to the server.

##### Solution
1. You don't need to create promise for setup dataset.
2. You don't need install `jsonwebtoken`.
3. You don't need install any hashing password package.
4. No need setup any set of confirmation email function.
5. Only `payload-organizer`!

## How to use it?
Install the dependencies;
```
> npm install --save payload-organizer
```

Then, use it on the code.

```javascript
const Organizer = require('payload-organizer);

const registerPayload = new Organizer({
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

const fixData = registerPayload.organize();
console.log(fixData); // will return push-ready object of dataset.
```

## Author
[Fuadit Muhammad](https://github.com/fuaditrockz)

## License
This project is licensed under the MIT license. See the [LICENSE](https://github.com/fuaditrockz/payload-organizer/blob/master/LICENSE) file for more info.