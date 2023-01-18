import axios from "axios"
import { useState } from "react";

const API_URL = "http://localhost:8000/api/";


const register = async (username , email , password,password_confirmation,birthday,country,city,fonction,photo) => {
    
    
    // const user = {
    //     'username':username,
    //     'email':email,
    //     'password':password,
    //     'password_confirmation':password_confirmation,
    //     'birthday':birthday,
    //     'country':country,
    //     'city':city,
    //     'photo':photo
    // };
    const formData = new FormData();
    formData.append('username',username);
    formData.append('email',email);
    formData.append('password',password);
    formData.append('password_confirmation',password_confirmation);
    formData.append('birthday',birthday);
    formData.append('country',country);
    formData.append('city',city);
    formData.append('photo',photo);
    formData.append('fonction',fonction);
    console.log({username , email , password,password_confirmation,birthday,country,city,fonction,photo});
    const response = 
    await axios.get('/sanctum/csrf-cookie').then(response=>{
        axios.post( "/api/register",formData)
        .then(res=>{ console.log(res)})
        .catch(err=>{ console.log("err",err)});
    });  
    return response ; 
};

const login =  async (email, password) => {
    
    const formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);

    //7yd zwl ythl mochkile 

     return axios.get('/sanctum/csrf-cookie').then(response=>{
         return axios.post("/api/login",formData);
      }); 
    // Ou cas ou probleme faut rajouter credentialité on l'ajoutant dans app.js
    // const Promise =  await  axios.post("/api/login",formData);

    // console.log(Promise);
        
    // const PromiseConsommation = Promise ; 

    // if (PromiseConsommation.data[0].token) 
    //     localStorage.setItem("user", JSON.stringify(Promise.data));
              
        
    // return Promise;
  

    // const promiseResult = Promise.then(response => {
           
    //     }
       
    // })
};
    
const logout = () => {
    axios.post(API_URL+`logout`);
    localStorage.removeItem("user");
};

const updateUser = (id,user) => {
   return  axios.post(API_URL+`users/${id}`,user);
}
export default {
    register , 
    login , 
    logout ,
    updateUser
};

