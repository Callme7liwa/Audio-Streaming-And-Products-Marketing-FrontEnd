import { Link } from "react-router-dom";
import "./../../../8-css/public/public-page-user.css";

export const CardPublicUser = (props) => {
    const {photo , username ,id } =props  ; 
    return (
        <>
            <div class="public-music-card" key={id}>
                <div class="card-public-music-box">
                        <div class="card-public-music-artist-name"> {username}</div>
                    <div class="card-public-image"> 
                        <img src={"http://localhost:8000/"+photo}/>
                    </div>
                   <Link to={`/public/users/${id}`}> <span class="badge badge-info"> <i class="fa fa-long-arrow-right mr-1"></i>GO IN </span></Link>
                </div>
            </div>
        </>
    )
}