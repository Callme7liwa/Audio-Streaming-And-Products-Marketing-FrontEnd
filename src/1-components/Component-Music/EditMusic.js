import React, { useEffect, useState } from 'react';
import './../../8-css/Music/EditMusic.css';
import kif from "./../../7-images/Fifa.jpg";
import $ from 'jquery';
import { toast } from 'react-toastify';
import { clearMessage } from '../../4-actions/message';
import { useSelector } from 'react-redux';
import { updateMusic, updateMusicPosted, updateMusicQeueu } from '../../4-actions/music';

const EditMusic = (props ) => {
    const {music,dispatch,type} = props ; 
    const [image , setImage] = useState(null);
    const [changed , setChanged] = useState(false);
    const {message} = useSelector(state=>state.message);
    
    const [musicUpdate , setMusicUpdate] = useState({
        nom:music.nom,
        description  : music.description , 
        date_publication : music.date_publication,
        photo : music.photo
    });

    useEffect(()=>{
        if(message)
        {setTimeout(
         notify(message)
        ,500)}
        return  dispatch(clearMessage());
    },[message]);
    
    const notify = (message)=>{
      // inbuilt-notification
      if(message.includes('success'))
      {
        toast.success(message);
        $(document).ready(function(){
                $('.modal-update').fadeOut(300);
         
        })
      }
      else
      toast.error(message);
      // default notification    
    }
  

   $(document).ready(function(){
        $('.closal-update').click(function(){
            $('.modal-update').fadeOut(300);
        });
    })
      
    const renderPhoto = (source) => {
        return (
            <>
                <img src={URL.createObjectURL(source)} alt="" key={source.URL} />
                <i class="fa fa-trash-o"></i>
            </>
        );
    };
  
    const handleSubmit =(e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nom',musicUpdate.nom);
        formData.append('date_publication',musicUpdate.date_publication);
        formData.append('description',musicUpdate.description);
        if(image)
        formData.append('photo',image);
        if(type=="posted")
        dispatch(updateMusicPosted(music.id,formData));
        else
            if(type=="qeueu")
                dispatch(updateMusicQeueu(music.id,formData));
        

    }

    const handleChangeImg = (e) => {
        setImage(e.target.files[0]);
    }


      return (
          <form onSubmit={handleSubmit}>
                <div class="modal-update animate__animated animate__bounce animate__delay-1s">
                    <i class="fa fa-times close-modal" onClick={()=>props.setShow(false)}></i>
                    <h2> <i class="fa fa-refresh mr-2"></i>Hello a gain , thanks for <span class="text-danger">updating</span>  </h2>
                    <section class="section-left">
                        
                        <div class="form-group grp-1 w-100">
                            {image!=null ? (<>{renderPhoto(image)}</>):(<><img src={"http://localhost:8000/"+musicUpdate.photo}/></>)}
                            {/* <img  src={"http://localhost:8000/"+musicUpdate.photo} /> */}
                        </div>
                        <div class="form-group grp-2 w-100" >
                            <label  for="upload-pic-product" class="label-for-uploading">
                            <i class="fa fa-refresh mr-1"></i>wanna  Update Picture  ? click : dont click
                            </label>
                            <input  id="upload-pic-product" type="file" name="image" onChange={handleChangeImg} ></input>
                        </div>

                    </section>
                    <section class="section-right">
                        <div class="form-group row">
                            <label > Name </label>
                            <input class="form-control col-md-12" type="text" value={musicUpdate.nom} onChange={(e)=>setMusicUpdate({...musicUpdate,nom:e.target.value})}></input>
                        </div>
                        <div class="form-group row">
                            <label > Date Publication </label>
                            <input class="form-control col-md-12" type="date" value={musicUpdate.date_publication} onChange={(e)=>setMusicUpdate({...musicUpdate,date_publication:e.target.value})}></input>
                        </div>
                        <div class="form-group row">
                            <label > Description  </label>
                            <textarea class="form-control" type="text" onChange={(e)=>setMusicUpdate({...musicUpdate,description:e.target.value})} value={musicUpdate.description }>{musicUpdate.description }</textarea>
                        </div>
                        <button type="submit" class="btn btn-dark btn-block" > Submit </button>
                    </section>
                </div>
        </form>
      )
};


export default EditMusic ;