import React from 'react'
import { TextField } from '../TextField';
import { TextFieldComponent } from '../TextFieldComponents';

export const SignUp = (props) => {

    const {formData , setFormData}=props ; 
    const handleChange = (e) => {
        setFormData({
            ...formData ,
            [e.target.name]:e.target.value
        });
    };

  return (
      <>
        <TextFieldComponent classi="form-control" label="Username" name="username" type="text" handleChange={handleChange}  value={formData.username} />
        <TextFieldComponent classi="form-control" label="Email" name="email" type="text" handleChange={handleChange}  value={formData.email} />  
        <TextFieldComponent classi="form-control" label="Password" name="password" type="Password" handleChange={handleChange}  value={formData.password} />  
        {/* <TextField classi="form-control" label="Username" name="username" type="text"  />
        <TextField classi="form-control" label="Email" name="email" type="text" />  
        <TextField classi="form-control" label="Password" name="password" type="Password"  />   */}

      </>
  )
}
