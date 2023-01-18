import React from 'react'
import { TextField } from '../TextField';
import { TextFieldComponent } from '../TextFieldComponents';

export const InfoPersonel = (props) => {
    const {formData , setFormData}=props ; 
    {console.log(props)}
    const handleChange = (e) => {
        setFormData({
            ...formData ,
            [e.target.name]:e.target.value
        });
    };

  return (
      <>
        <TextFieldComponent classi="form-control" label="Country " name="country" type="text" handleChange={handleChange}  value={formData.country} />  
        <TextFieldComponent classi="form-control" label="City" name="city" type="text" handleChange={handleChange}  value={formData.city} />
        <TextFieldComponent classi="form-control" label="Birthday" name="birthday" type="Date" handleChange={handleChange}  value={formData.birthday} />
        {/* <TextField classi="form-control" label="Country " name="country" type="text"  />  
        <TextField classi="form-control" label="City" name="city" type="text"  />
        <TextField classi="form-control" label="Birthday" name="birthday" type="Date" /> */}

      </>
  )
}
