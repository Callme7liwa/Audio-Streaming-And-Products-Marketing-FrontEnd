import { useState } from "react";
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import $ from 'jquery';
import {TextField} from "./../TextField.js"
import { Link } from "react-router-dom";
export const Product  = (props) => {

    const {product,id} = props ; 
    const [etat,setEtat] = useState(0);
    const [commentaire , setCommentaire] = useState('');
    const [currentId , setCuurrentId] = useState();

    const  handleClick = (e) => {
             if(etat===0)
             {
                 
                $(e.target).parent().parent().find('.form-group').show(500);
                 $(e.target).css('color','blue')
                 setEtat(1);
             }
             else  
            {
                $(e.target).parent().parent().find('.form-group').hide(500);
                $(e.target).css('color','#999')
                setEtat(0);
            }  
          
               
    }


    // if(currentId === currentId)
    // {
    //     handleClick();
    // }

    

    const validate = Yup.object({
        commente: Yup.string()
          .min(4, 'Commente must be at least 4 charaters')
          .required('You can t share a empty commente'),
      })

    const handleSubmit = (values) => {
        console.log(values);
    }
    

    return (
        <div class="product-card " key={id}>
            <div class="product-card-header">
                <img src={product.image} />
            </div>
            <div class="product-card-footer">
                <i class="fa fa-heart"></i>
                <Link to={`/products/${id}`}>  <i class="fa fa-eye"></i> </Link>
                <i class="fa fa-comment"   onClick={ handleClick}></i>
            </div>
            <div class="form-group form-groupp ">
            <Formik initialValues={{commente:''}} validationSchema={validate} onSubmit={(values)=>{ handleSubmit(values); }}>
                {formik => (
                    <Form >
                        <TextField  class="myInput" name="commente" type="text" label="ADD COMMENT "/>
                        <button class="col-md-6 offset-3 btn btn-dark" type="submit">Submit <i className="fa fa-paper-plane"></i> </button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
    );
}
    
