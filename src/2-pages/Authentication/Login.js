import "./../../8-css/Authentication/login.css";
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { TextField } from '../../1-components/TextField';
import  {ButtonFieldComponent} from "./../../1-components/ButtonFieldComponent"
import { login } from '../../4-actions/auth';
import * as Yup from 'yup';
import { Form, Formik } from 'formik';
import {clearMessage} from "../../4-actions/message";
import { Link } from "react-router-dom";
export const Login  = () => {

const dispatch = useDispatch();
const history = useHistory();
const { isLoggedIn } = useSelector(state => state.auth);
const {message} = useSelector(state=>state.message);

// const {user} = useSelector(state=>state.auth);

useEffect (()=>{
  if (isLoggedIn) {
    history.push("/dashboard");
  }
})

useEffect(()=>{
    if(message)
    {setTimeout(
     notify(message)
    ,500)}
    return  dispatch(clearMessage());
},[message]);

const messageAuth = () =>{return (<>{message}</>)}

  


const notify = (message)=>{
  // inbuilt-notification
  if(message.includes('SUCCESS'))
  toast.success(message);
  else
  toast.error(message);
  // default notification    
}

const validate = Yup.object({
 
  email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
  password: Yup.string()
    .min(4, 'Password must be at least 6 charaters')
    .required('Password is required'),

})

const handleSubmit = (values) => {
    dispatch(login(history,values.email, values.password))
}



return (
  <Formik
    initialValues={{
      email: '',
      password: '',
    }}
    validationSchema={validate}
    onSubmit={(values)=>{
      handleSubmit(values);
    }}
  >
    {formik => (
    <div className="containerr-login">
        
        <Form  className="cardd">
            <div className="cardd-header">
               <h3>Welcom <span className="text-warning"> BACK </span> </h3>
                <h5>Login to  <span className="text-warning"> Continue </span> </h5>
             </div>
             <div className="cardd-body">
                <TextField class="form-control" label="Email" name="email" type="email" />
                <TextField class="form-control" label="password" name="password" type="password" />
             </div>
              <ButtonFieldComponent  classi="btn btn-warning col-md-12" name="Login" type="submit" /> 
               <Link className="link text-center text-white" to="/register"> You don't have already one ? </Link> 
        </Form>
    </div>
    )}
  </Formik>
)
}
