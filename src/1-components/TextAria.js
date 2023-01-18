import { ErrorMessage, useField } from "formik";

export const TextAria = (props) => {
    const {handleChange , name , label , classi} = props ; 

    return (
        <div class="form-group">
            <label > {label} </label>
            <textarea onChange = {handleChange } className={classi} name="description" autoComplete="off" ></textarea>
        </div>
    )
}