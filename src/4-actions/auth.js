import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    UPDATE_USER,
  } from "./types";
import emailjs from '@emailjs/browser';


import AuthService from "../3-services/auth.service";
import authService from "../3-services/auth.service";
import { setMessage } from "./message";




export const register = (history,username,email,password,password_confirmation,birthday,country,city,fonction,photo) => (dispatch) => {
  return  AuthService
    .register(username,email,password,password_confirmation,birthday,country,city,fonction,photo)
    .then(response=>{ 



      emailjs.send('service_zrtfzro', 'template_yb42176',{'fullName':"amine",'email':"ayoubseddiki132@gmail.com",'message':"ok le monde"}, '1_Fvd5UuXP7jH0mIe')
      .then(response => {
        console.log('SUCCESS!', response);
        dispatch({
          type: REGISTER_SUCCESS,
        });
        dispatch({
          type: SET_MESSAGE,
          payload: 'SUCCESS  , your request to register has been sent',
        });
        history.push("/login");
       }, error => {
        console.log('FAILED...', error);
      });






    },    (error) => {
      console.log("my error",error);
      const message = error ;       
      dispatch({
        type: REGISTER_FAIL,
      });
      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return error;
    }
  );
};
    

export const login = (history,username, password) => (dispatch) => {
  return AuthService.login(username, password).then(
    (response) => {
      if(response.status==206)
      {
        dispatch({
          type: LOGIN_FAIL,
        });

        dispatch(setMessage(response.data.message));
        
      }
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: response.data[0].user },
      });
      localStorage.setItem("user",JSON.stringify(response.data[0].user ))
      // window.location.reload(false);
      history.push('/dashboard'); 
      return response ; 
    },
    (error) => {
      dispatch({
        type: SET_MESSAGE,
        payload: "BAD REQUEST !",
      });

      return Promise.reject();
    }
  );
};

export const updateUser = (id , user) => (dispatch) => {
   authService.updateUser(id,user).then(response=>{
      localStorage.setItem("user",JSON.stringify(response.data.user ));
      dispatch({
        type:UPDATE_USER
      });
      window.location.reload(false);
      dispatch(setMessage("success,your profile has been updated succesfuly"));
   });
}

export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: SET_MESSAGE,
    payload: "SUCCESS  , U ARE LOGGED OUT SUCCESFULY",
  });
};