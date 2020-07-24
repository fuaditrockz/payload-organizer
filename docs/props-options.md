# options Prop

> #### Type: `Object` (**optional**)
> #### Prop Position: new Organizer({ data, `options` });

Here is where you configure the  data that return.

## Props
These are available props inside `options`.

### validate
?> This option will validation your object. If you set it as `true`, it will running first inside the `Organize`'s class.
  <br/> Default `false`

### hashingPassword
?> This option will hashing the `password` value inside your [data prop](/props-data) object.
  <br/> Default `false`

### generateToken
?> This option will give the *token* on final return of your fix-data. The key name on the object is `token`.
  <br/> Default `false`

### Usage
```javascript
const Organizer = requiree('payload-organizer');

const yourDataObject = {
  name: 'Fuadit Muhammad',
  email: 'muhammadfuaditrockz@gmail.com',
  password: '123456',
  confirmation_password: '123456',
}

const fixData = new Organizer({
  data: { ...yourDataObject }, // Put inside this.
  options: {
    validate: true, // validate
    hashingPassword: true, // hashingPassword
    generateToken: true // generateToken
  }
});
```