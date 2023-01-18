import { useEffect, useState } from "react";
import "./../../8-css/Product/updateProduct.css"
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import { TextField } from "@mui/material";
import { TextFieldComponent } from "../TextFieldComponents";

export const UpdateProfile = (props) => {
    const {user }= props ; 

    const [selectedFile , setSelectedFile] = useState(null);
    useEffect(()=>{
        console.log(user);
    })

    const validate = Yup.object({
        username: Yup.string()
        .required("username is required"),

        city: Yup.string()
          .required('city is required'),

        country: Yup.string()
          .required('country  is required'),
      
      })

    const handleSubmit = (values) => {
        console.log(values);
    }

    return(
        <div class="update-container"> 
            <div class="update-card">
                <div class="update-card-header">
                    <div class="update-card-header-icon"> <i class="fa fa-refresh "></i> </div>
                    <div class="update-card-header-title" > Thanks for <span class="text-warning">Updating </span></div>
                </div>
                <div class="update-card-body">
                <Formik
                    initialValues={{
                    username: user.name,
                    city:user.city,
                    country:user.country,

                    }}
                    validationSchema={validate}
                    onSubmit={(values)=>{
                    handleSubmit(values);
                    }}
                >
                {formik => (
                    <Form>
                        <TextField classname="custom-input" label="Username " name="username" type="text" /> 
                        <TextField classname="custom-input" label="Country " name="country" type="text" /> 
                        <TextField classname="custom-input" label="City " name="city" type="text" /> 
                        <div class="imageActual"> 
                            <label class="form-label">Actual <span class="text-warning">Image</span></label> 
                            <img src={"http://localhost:8000/"+user.photo}  />
                        </div>
                        <TextFieldComponent type="file" classi="custom-input" label="Wanna Change ? " name="file" handleChange={(e)=>setSelectedFile(e.target.files[0])}   />
                        <button class="BtnSubmitUpdate" type="submit"> <i class="fa fa-check"></i></button>
                    </Form>

                 ) }
                    </Formik>
                </div>
            </div>
          
        </div>
    )
}