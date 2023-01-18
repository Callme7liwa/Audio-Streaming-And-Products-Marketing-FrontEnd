import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getMyMusicLiked, unLikeMusic } from "../../4-actions/music";
import { Empty } from "../Empty.js";
import { CardmusicQeueu } from "./CardMusic";

export const AllMusicLike = (props) => {

    const [fetch , setFetch] = useState(false);
    const {myMusicLiked} = useSelector(state=>state.music);

    const {handleChangePage,dispatch } = props ; 

    const fetchData = () => {
            dispatch(getMyMusicLiked())
            setFetch(true);
            console.log("in the page LIKE" , myMusicLiked);
    }

    useEffect(()=>{
        if(fetch===false)
            fetchData();
    });

    if(fetch===true )
        {if(myMusicLiked!==null)
        {         
            if(myMusicLiked.length==0)
               return <Empty title=" List of liked music is empty "/>
        }
        else
        {
            return <Empty title=" List of liked music is empty "/>
        }}
         

    if(fetch===false&&myMusicLiked===null )
        return <> Wait please </>

    const handleUnlike = (music) => {
        console.log(music);
         dispatch(unLikeMusic(music.id))
    }

    const renderItems = 
    myMusicLiked.map((music)=>{
            return (
                <CardmusicQeueu handleUnlike={handleUnlike} type="liked" music={music}  key={music.id} />
        ) 
    });

    

    return (
        <div class="container-component"> 
            <div class="go-back-to-dashboard back-all-user">
                <span onClick={handleChangePage} > <i class="fa fa-long-arrow-left"></i></span>
            </div>       
            <>{renderItems}</>
        </div>
    )
}