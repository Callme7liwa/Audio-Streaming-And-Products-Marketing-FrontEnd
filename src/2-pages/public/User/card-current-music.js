import { useEffect, useState } from "react";
import { like, unlike } from "../../../4-actions/user";
import "./../../../8-css/public/public-page-user.css";

export const CardCurrentMusic = (props) => {
    
    const {handleClick ,dispatch, music,username ,musicLiked} = props ;

    const [likeCount , setLikeCount] = useState(music.liked_count);
    const musicIsLiked = () => {
        if(musicLiked)
        for(var i=0; i<musicLiked.length; i++) {
            if(music.id=== musicLiked[i].id) {
                return true ; 
            }
        }
            return false ; 
    }

    

    const handleLike = (e) => {

        if(musicIsLiked())
           { dispatch(unlike(music.id,music)); setLikeCount(likeCount-1)}
        else
         {dispatch(like(music.id,music)); setLikeCount(likeCount+1)}
    }
  
    return (
        <>
            <div class="card-current-music-box" onClick={handleClick} id={music.id} key={music.id}>
                <section class="section-current-music-left">
                    <img src={"http://localhost:8000/"+music.photo}/>
                    <div class="section-current-music-left-info">
                        <span>{music.nom}</span>
                        <span>{username}</span>
                    </div>
                </section>
                <section class="section-current-music-main">
                    <span id={music.id} class="badge">click to play </span>
                </section>
                <section className="section-current-music-right">
                        <span >19 500 <i class="fa fa-headphones mr-1 "></i></span>          
                        <span onClick={handleLike}> {likeCount} <i class={musicIsLiked() === true ? "fa fa-heart music-liked" : "fa fa-heart"}></i></span>
                </section>
            </div>
        </>
    )
}