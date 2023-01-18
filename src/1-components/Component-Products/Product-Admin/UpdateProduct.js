import { useEffect, useState } from "react";
import productService from "../../../3-services/product.service";
import "./../../../8-css/Product/updateProduct.css"
import {TextField} from "./../../TextField.js";
import {TextFieldComponent} from "./../../TextFieldComponents.js";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';

export const UpdateProduct = (props) => {
    const {handleChangePage , product }= props ; 

    const [selectedFile , setSelectedFile] = useState(null);
    useEffect(()=>{
        console.log(product);
    })

    const validate = Yup.object({
 
        name: Yup.string()
          .required('name is required'),
        price: Yup.string()
          .required('Price  is required'),
      
      })

    const handleSubmit = () => {

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
                    name: product.name,
                    price:product.price,
                    // category:product.category,

                    }}
                    validationSchema={validate}
                    onSubmit={(values)=>{
                    handleSubmit(values);
                    }}
                >
                {formik => (
                    <Form>
                       
                        <TextField classname="custom-input" label="Name" name="name" type="text" /> 
                        <TextField classname="custom-input" label="Price " name="price" type="number" /> 
                        <div class="imageActual"> 
                            <label class="form-label">Actual <span class="text-warning">Image</span></label> 
                            <img src={"http://localhost:8000/"+product.photo}  />
                        </div>
                        <TextFieldComponent type="file" classi="custom-input" label="Wanna Change ? " name="file" handleChange={(e)=>setSelectedFile(e.target.files[0])}   />
                        <button class=" BtnSubmitUpdate" type="submit"> <i class="fa fa-check"></i></button>
                    </Form>

                 ) }
                    </Formik>
                </div>
            </div>
          
        </div>
    )
}