import React from 'react'

export const TextFieldComponent = (props) => {
    const {handleChange ,classi, label , name , type  , value } = props ; 

    return (
        <div className="form-group">
            <label htmlFor={name}> {label} </label>
            <input className={classi} name={name} type={type} onChange={handleChange} value={value} />
        </div>
    )
}