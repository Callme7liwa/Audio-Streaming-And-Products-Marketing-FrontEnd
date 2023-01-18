import { Form, Formik } from 'formik';
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { AvatarPersonnel } from '../../1-components/Container-Components/AvatarPersonnel';
import { InfoPersonel } from '../../1-components/Container-Components/InfoPersonel';
import { SignUp } from '../../1-components/Container-Components/SignUp';
import { register } from '../../4-actions/auth';
import "./../../8-css/Authentication/register.css"
import { Link } from 'react-router-dom';

export const Register = () => {
    const history = useHistory();
    const [page,setPage] = useState(0);
    const [selectedFile,setSelectedFile] = useState(null);
    const  dispatch = useDispatch();
    const [formData , setFormData] = useState({
        username:"",
        email:"",
        password:"",
        country:"",
        city:"",
        birthday:"",
        fonction:""
    });

    const FormTitles = [" Registring " , "Personal Info" ,"Upload your pic "];

    const ComponentToDisplay = () => {
        if(page==0)
        return <SignUp formData={formData} setFormData={setFormData} />
        else 
        {
            if(page==1) 
            return <InfoPersonel formData={formData} setFormData={setFormData} />;
            else
            if(page===2)
            return <AvatarPersonnel  formData={formData} setFormData={setFormData} selectedFile={selectedFile} setSelectedFile={setSelectedFile} />
        } 

    }


    const handleSubmit =  async (e) => {
        e.preventDefault();
       
         dispatch(
            register(
                history,formData.username, formData.email, formData.password, formData.password,
                formData.birthday, formData.country, formData.city,formData.fonction, selectedFile
            )
        );
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(page>=2)
           handleSubmit(e);     
        else
        setPage((currPage) => currPage + 1);          
    }
   
  return (
    <>
    <div className="register-container">
        <form  className="register-card"  onSubmit={handleSubmit}>

                <span className="register-step bg-warning"> Step {page+1} </span>
                <div className="register-card-header">
                    <h3> Welcom , <span className="text-warning">Let's Collaborate</span> </h3>
                    <h5> {page==0?'Thanks For':''} <span className="text-warning">{FormTitles[page]}</span>  </h5>
                </div>

                <div className="register-card-body">
                        {ComponentToDisplay() }
                   
                    <div className="form-group form-group-buttons">
                        {
                            page === 0  ? <></>  : 
                            (
                                <a className='btn text-black col-md-5 btn-warning ' disabled={page == 0} onClick={() => {setPage(page-1);}}>
                                        Prev
                                </a>
                            )
                        }

                        <button className={ page===0 ? "btn btn-warning btn-block " : "btn col-md-5 btn-warning " } 
                            onClick={ handleClick}
                        >
                         {page === FormTitles.length - 1 ? "Submit" : "Next"}
                    </button>
                    </div>
                    <Link class="nav-link text-white text-center" to="/login"> You have an account already ? </Link>
                </div>
        </form>
    </div>
    </>
           
  )
}
