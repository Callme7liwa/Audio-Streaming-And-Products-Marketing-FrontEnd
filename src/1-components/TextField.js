import React from 'react';
import { ErrorMessage, useField } from 'formik';

export const TextField = ({className,  label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      { props.aria!='1' ?
        (
          <input
          className={className}
          {...field} {...props}
          autoComplete="off"
         />
        )
        :(
          <textarea
          className={className}
          {...field} {...props}
          autoComplete="off"
         > </textarea>

        )}
      
      <ErrorMessage component="div" name={field.name} className="error text-danger" />
    </div>
  )
  
}
