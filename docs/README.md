<div style='justify-content:center; width:100%;'>
<img src='_media/cook.svg' width="120" style='display:block; margin:auto;'/>
</div>

# payload-organizer
> A tools to cook your data object into **push-ready**

# What it is?
**payload-organizer** help you to setup your data easily and *auto-mutating* it, without going through various stages that make your code messy like a jungle.

# Background Problem
So many tasks that you must do before push fix-data into database, or return fix-data to another task that you wannna do. Simple solution if you use `payload-organizer`. Only setup the *beta-object* that you wanna mutating before push/save or return it as fix-data.

In addition, you also have to take care of chaotic *javascript promises* in returning data while thinking of a good code for your project. `payload-organizer` take care of this.

### Example Study Case
For example if you wanna make the **register** data payload. You need to do these;
> 1. Validate the payload.
> 2. Hashing password.
> 3. Sending email.
> 4. Create the token.
> 5. And another conditions that you must set to fix the data object.

Instead you coding it one by one and over time there is more chaotic, you just make it with call one simple *class function* by **payload-organizer**.

# Features
* One simple class function called
* Auto token generator
* Auto hashing
* Email sender automation
* Speed up generating fix-data

# Getting Started
Check out the [Quick Start](/quickstart) doc to get started.

# Usage
For example you have some temporary data object before you push it into database or returning it.
```javascript
const yourDataObject = {
  name: 'Fuadit Muhammad',
  email: 'muhammadfuaditrockz@gmail.com',
  password: '123456',
  confirmation_password: '123456',
}
```
Then, you only import `payload-organizer` module.
```javascript
const Organizer = requiree('payload-organizer');

// Or on ES6
import Organizer from 'payload-organizer';
```
Last put your temporary data object on `Organizer`'s `data` props. And set the `options` that you want.
```javascript
const fixData = new Organizer({
  data: { ...yourDataObject }, // rest of your data
  options: {
    validate: true,
    hashingPassword: true,
    generateToken: true,
    emailProvider: {
      // Set of your email provider here. Such as; sendgrid etc.,
    }
  }
});

console.log(fixData.fix());
```

Output;

```bash
{
  name: 'Fuadit Muhammad',
  email: 'muhammadfuaditrockz@gmail.com',
  password: '3fc0a7acf087f549ac2b266baf94b8b1',
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  is_verified: false
}
```

# Author
[Fuadit Muhammad](https://github.com/fuaditrockz)

# License
This project is licensed under the MIT license. See the [LICENSE](https://github.com/fuaditrockz/payload-organizer/blob/master/LICENSE) file for more info.