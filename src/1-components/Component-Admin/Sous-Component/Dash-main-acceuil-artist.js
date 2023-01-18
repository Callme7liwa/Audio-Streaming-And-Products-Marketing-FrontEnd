import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getMusicsOfUsersWichImFollowing, getProductsOfUsersWichImFollowing, setUnfollowUsers } from "../../../4-actions/user";
import $ from 'jquery';


import "./../../../8-css/Admin/dash-main-acceuil.css"
import { CardAcceuilArtist } from "./card-main-acceuil-artist";
import { CardUnFollowedUsers } from "./card-unfollowed-users";
// Component where is not the super admin authenticated 
export const DashAcceuilArtist = (props) => {
    const {unFollowed} = props ; 
    const [etat,setEtat] = useState(0);
    const {musicOfUsersFollowedByAuthenticated,productsOfUsersFollowedByAuthenticated,ArtisteUnFollowedByAuthenticated} = useSelector(state=>state.user);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        if(ArtisteUnFollowedByAuthenticated===null)
            dispatch(setUnfollowUsers());
    },[ArtisteUnFollowedByAuthenticated]);

    useEffect(()=>{
        console.log("cc")
        dispatch(getMusicsOfUsersWichImFollowing());
        dispatch(getProductsOfUsersWichImFollowing());
    },[]);

    
    const handleClick = (e) => {
            e.target.classList.toggle('active');   
    }
    

    const RenderListMusics = musicOfUsersFollowedByAuthenticated?.map((music)=>{
        return (
        <>
            <CardAcceuilArtist item={music}  key={music.id}/>
        </>
        )
    })

    const RenderListProducts = productsOfUsersFollowedByAuthenticated?.map((product)=>{
        return (
        <>
            <CardAcceuilArtist item={product}  key={product.id}/>
        </>
        )
    })

    const RenderUnFollowedUsers =  ArtisteUnFollowedByAuthenticated?.map(unFollow=>{
        return (
            <>
                <CardUnFollowedUsers dispatch={dispatch} key={unFollow.id} unFollow={unFollow} />
            </>
        )
    })
        



    return (
        <>
        <div class="dash-main-acceuil-artist-container">
            <section class="dash-main-acceuil-artist-content-left">
                <nav class="dash-main-acceuil-artist-content-left-nav-navigate ">
                    <ul>
                        <li class={etat===0? 'active' : ''} onClick={()=>setEtat(0)}> <a >musics </a> </li>
                        <li class={etat===1? 'active' : ''} onClick={()=>setEtat(1)}> <a>products </a> </li>
                    </ul>
                </nav>

                {etat===0 ? (<>{RenderListMusics}</>) :(<>{RenderListProducts}</>)}
            </section>
            <section class="dash-main-acceuil-artist-content-right">
                <span class="dash-main-acceuil-artist-content-right-title">{unFollowed !==null && unFollowed.length!==0 ? 'suggestion pour vous' :'Nothing to suggest'}  </span>
                {RenderUnFollowedUsers}          
            </section>
        </div>
        </>
    )
}