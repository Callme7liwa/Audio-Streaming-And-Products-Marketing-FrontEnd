import "./../../8-css/Admin/DashManageUsers.css";
import waiting from "./../../7-images/waiting.png"
import MusicPosted from "./../../7-images/MusicPosted.png"
import AddProduct from "./../../7-images/addProduct.png"
import Like from "./../../7-images/like.png";

import { CardManageUser } from "./Sous-Component/CardManageUser";
import { useEffect, useState } from 'react'
import { NewMusic } from "../Component-Music/NewMusic";
import { useDispatch, useSelector } from "react-redux";
import {setMusics, setMyOwnMusics} from "./../../4-actions/music"
import { AllMusicQueue } from "../Component-Music/AllMusicQueue";
import { AllMusicPosted } from "../Component-Music/AllMusicPosted";
import { HeaderDash } from "./HeaderDash";
import { AllMusicLike } from "../Component-Music/AllMusicLiked";
export const DashMusic = (props) => {

    const {handleClick,user} = props;

    const {username,photo , is_admin}=user ;

    
    const {myOwnMusics} = useSelector((state)=>state.music);

    const [page,setPage] = useState(0);

    const [fetch,setFetch] = useState(false);

    const dispatch = useDispatch();

    const fetchMusic = () => {
        dispatch(setMyOwnMusics());
        setFetch(true);
    };

    useEffect(()=>{
        if(fetch===false)
            fetchMusic();
            console.log("cc")
    },[myOwnMusics]);

    if(myOwnMusics===null)
       { return <> Please Wait ... ! </>}
    


    const renderList = () => {
        switch(page)
        {   
            case '1' : return <AllMusicQueue dispatch={dispatch} is_admin={is_admin} handleChangePage={handleChangePage} />
            case '2' : return <NewMusic  handleChangePage={handleChangePage} />
            case '3' : return <AllMusicPosted  dispatch={dispatch} is_admin={is_admin} handleChangePage={handleChangePage}/>
            case '4' : return <AllMusicLike  dispatch={dispatch} is_admin={is_admin} handleChangePage={handleChangePage}/>
            default : return ( 
            <div class="container-manage ">
                {
                    is_admin != -1 ?
                    (
                        <>
                            <CardManageUser title="DISPLAY MUSIC IN  QUEUE" image={waiting} icon="fa fa-plus" id='1' changePage={page=>setPage(page)}/>
                            <CardManageUser title="DISPLAY ALL POSTED MUSIC " image={MusicPosted} icon="fa fa-eye" id='3' changePage={page=>setPage(page)}/>
                        </>
                    )
                    :
                    null
                }
                {
                is_admin !=1 
                ? 
                (
                <>
                <CardManageUser title="DISPLAY ALL MUSIC LIKED " image={Like} icon="fa fa-eye" id='4' changePage={page=>setPage(page)}/> 
                { is_admin !=-1 ? (<CardManageUser title="ADD NEW MUSIC " image={AddProduct} icon="fa fa-plus" id='2' changePage={page=>setPage(page)}/>):null} 
                </>
                ):
                <CardManageUser title="ALL MUSIC " image={AddProduct} icon="fa fa-plus" id='2' changePage={page=>setPage(page)}/>
                } 
            </div>
            )
        }
    }

    const handleChangePage = () => {
        setPage(0);
    }

    return (
        <>
            <div class="dash-main">
                <HeaderDash handleClick={handleClick} username={username} photo={photo} is_admin={is_admin}/>
                {renderList()}
            </div>
        </>
    )
}