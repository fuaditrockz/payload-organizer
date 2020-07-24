# data Prop

#### Type: `Object` (**required**)
Here is where you put all the temporary data that you want to process. If in *server-side* processing such as using; **Express.js**. You can put req.body in this prop. Or if not, you just put your object here.

## Usage
```javascript
const Organizer = requiree('payload-organizer');

const yourDataObject = {
  name: 'Fuadit Muhammad',
  email: 'muhammadfuaditrockz@gmail.com',
  password: '123456',
  confirmation_password: '123456',
}

const fixData = new Organizer({
  data: { ...yourDataObject } // Put inside this.
});
```
