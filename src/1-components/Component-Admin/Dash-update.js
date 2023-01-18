import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUser } from '../../4-actions/auth';
import { clearMessage } from '../../4-actions/message';
import "./../../8-css/Admin/DashUpdate.css";
export const DashUpdate = (props) => {

    const {user} = props ; 
    
    const [selectedImage , setSelectedImage] = useState(null);
    const {message} = useSelector(state=>state.message);
    const dispatch = useDispatch();

    const [userUpdate,setUserUpdate] = useState({
        id:user.id,
        username:user.username,
        email:user.email,
        photo:user.photo,
        city:user.city,
        country:user.country,
        birthday:user.birthday,
    });

    useEffect(()=>{
        if(message)
        {setTimeout(
         notify(message)
        ,500)}
        return  dispatch(clearMessage());
    },[message]);
    
    const notify = (message)=>{
      if(message.includes('success'))
        toast.success(message);
      else
        toast.error(message);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('username',userUpdate.username);
        formData.append('email',userUpdate.email);
        formData.append('city',userUpdate.city);
        formData.append('country',userUpdate.country);
        formData.append('birthday',userUpdate.birthday);
        if(selectedImage)
            formData.append('photo',selectedImage);
        
        dispatch(updateUser(userUpdate.id,formData));
    }

    const handleChange = (e) => {
        console.log(e.target.name);
        setUserUpdate(
           { 
                ...userUpdate,
                [e.target.name]:e.target.value
            
            }
        )
    }

    const renderPhoto = (source) => {
        return (
            <>
                <img class="update-pic" src={URL.createObjectURL(source)} alt="" key={source.URL} />
            </>
        );
    };

    const handleChangeImage = (e) => {
        setSelectedImage(e.target.files[0]);
    }


  return (
      <section class="dash-main dash-main-update-info">
          <h2> Hello A gain update your <span class="text-warning"> PERSONEL INFO </span></h2>
            <form class="form-update-profile" onSubmit={handleSubmit}>
                <div class="form-group">
                    <label class="form-label"> Username </label>
                    <input class="form-control" name="username" value={userUpdate.username} onChange={handleChange}></input>
                </div>
                <div class="form-group">
                    <label class="form-label"> Email </label>
                    <input class="form-control" name="email" value={userUpdate.email} onChange={handleChange}></input>
                </div>
                <div class="form-group row">
                    <p class="col-md-3 form-label"> Previous Image </p>
                    {selectedImage!=null?(<>{renderPhoto(selectedImage)}</>) : (<img src={"http://localhost:8000/"+userUpdate.photo} class="update-pic"/> )}
                </div>
                <div class="form-group">
                    <label class="form-label"> Wanna <span class="text-warning"> Update ?</span> </label>
                    <input class="form-control" type="file" name="image" onChange={handleChangeImage} ></input>
                </div>
                <div class="form-group">
                    <label class="form-label"> City </label>
                    <input class="form-control" name="city" value={userUpdate.city} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label class="form-label"> Country </label>
                    <input class="form-control" name="country" value={userUpdate.country} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label class="form-label"> Birthday </label>
                    <input class="form-control" name="birthday" type="date" value={userUpdate.birthday} onChange={handleChange}></input>
                </div>
                <button type="submit" class="btn btn-warning col-md-12" > submit </button>
            </form>
      </section>
  )
}
