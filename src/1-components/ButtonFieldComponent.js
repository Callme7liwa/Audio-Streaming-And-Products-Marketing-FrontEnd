import React from "react"
export const ButtonFieldComponent = (props) => {
    const { classi , name , type } = props ; 
    return ( 
        <div class="form-group">
            <button  className={classi} name={name} type={type}>{name}</button>
        </div>
    )
}