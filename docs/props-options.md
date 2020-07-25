# options Prop

> #### Type: `Object` (**optional**)
> #### Prop Position: new Organizer({ data, `options` });

Here is where you configure the  data that return.

## Props
These are available props inside `options`.

### options.validate
?> This option will be as validator for your object. If you set it as `true`, it will running first inside the `Organize`'s class.
  <br/> Default `false`

You can use the validation with only *Boolean* like `true`, it means your validate default is `"regular"`,
<br/> or 
<br/> *Object* for another options like below;

`validate.type`: Reference for your type of the validate. The value type is *Enum*.
   - `"regular"`
     Only valiadate **email** and **password**.
   - `"register"`
     Validate **first_name**, **last_name**, **email**, and **password**
   - `"custom"`
     You can custom the validation with your own validator. If you choose this, please follow `validate.custom` below.

`validate.custom`: Reference for `validate.type: "custom"`. The value type is *Function*.

```javascript
// ...
   type: 'custom',
   custom: () => {
     // Your custom validator
   }
// ...
```

!> For use `validate.custom`, is required to set the `validate.type` into `"regular"` for running your function inside custom prop.

### options.hashingPassword
?> This option will hashing the `password` value inside your [data prop](/props-data) object.
  <br/> Default `false`

### options.generateToken
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