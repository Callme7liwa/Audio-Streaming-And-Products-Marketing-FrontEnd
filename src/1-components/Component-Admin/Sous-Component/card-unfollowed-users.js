import { follow, followSimple } from "../../../4-actions/user";
import { Link } from 'react-router-dom';


export const CardUnFollowedUsers = (props) => {
    const {unFollow,dispatch} = props ;
     const handleSubscribe = (e) => {
         console.log(e.target.id)
        dispatch(followSimple(e.target.id))
    } 

    

    return (
        <div class="dash-main-acceuil-artist-content-right-card" key={unFollow.id}>
            <div class="dash-main-acceuil-artist-content-right-card-left">
                <img  src={"http://localhost:8000/"+unFollow.photo}></img>
            </div>
            <div class="dash-main-acceuil-artist-content-right-card-right">
                <Link class="link" to={`/public/users/${unFollow.id}`}><span class="">{unFollow.username}</span></Link>  
                <span class="">suggestion pour vous</span>
            </div>
            <span class="badge badge-abonner" onClick={handleSubscribe} id={unFollow.id}> <i class="fa fa-check"></i> s'abonner </span>
        </div>
    )
}