import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  setPublicMusics } from "../../4-actions/public";
import { CardMusic } from "./CardMusic";
import "./../../8-css/public/public-page-musics.css"
import { Box, CircularProgress } from "@mui/material";
import { Link } from "react-router-dom";

export const PublicPageMusics = () => {

    const {musics} = useSelector(state=>(state.publicReducer));

    const dispatch = useDispatch();

    useEffect (()=>{
        dispatch(setPublicMusics());
    },[musics]);

    
    if(musics === null )
    return <> 
        <div class="d-flex align-content-center justify-content-center">
                 <Box  mt={50} >
                    <CircularProgress />
                </Box> 
        </div>
    </>
    
    const renderList = 
        musics.map( (music) => {
            return ( <CardMusic music={music} key={music.id}/>)
        });
    

    return(
        <div className="public-musics-container">
            <div class="public-musics-container-header">
                <input className="form-control col-md-3 input-music-reaserch" placeholder="Search about smtg here ... "></input>
            </div>
            <div className="public-musics-cards">
                <div class="go-back-to-dashboard">
                  <Link to="/dashboard" class="nav-link" ><span  class="go-back-content"> <i class="fa fa-long-arrow-left"></i> Dashboard </span> </Link>
                </div>
                <>{renderList}</>
            </div>
        </div>
    )
}