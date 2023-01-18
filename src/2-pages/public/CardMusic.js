import { useEffect } from "react";
import { Link } from "react-router-dom";

export const CardMusic = (props) => {

    const {music} = props ; 

    


    return (
        <div class="public-music-cardd">
            <div class="card-public-music-box">
                    <div class="card-public-music-artist-name"> {music.user.username} </div>
                <div class="card-public-image"> 
                    <img src={"http://localhost:8000/"+music.photo}/>
                </div>
                    <div class="card-public-music-name">{music.nom}</div>
                <div class="card-public-listen-now"><Link class="nav-link" to={`/public/music/${music.id}`}>  <i class="fa fa-long-arrow-right"></i></Link></div> 
            </div>
        </div>
    )
}