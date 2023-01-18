import { Box, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteMusisOfCurrentUser, setMusisOfCurrentUser, setPublicMusic, unsetPublicMusic } from "../../4-actions/public";
import "./../../8-css/public/public-page-music.css";
import { HeaderMusicComponent } from "./header-music-component";
import { MusicPlayed } from "./music-played";
import { SideMusic } from "./Side-Music";

export const PublicPageMusic = (props) => {
    //la music qu'on a fait clicker dans la page d'acceuill
    const {currentMusic} = useSelector((state)=>state.publicReducer);
    //l'ensemble des musics pour l'artiste du current music
    const {musicOfCurrentUser} = useSelector((state)=>state.publicReducer);
    // la music qu'on est entrain d'ecouter
    const [currentPlayed,setCurrentPlayed] = useState(null);
    const [fetch,setFetch] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch();
    //


    const calculateTime = (sec) => {
        const minutes = Math.floor(sec / 60);
        const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(sec % 60);
        const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnMin} : ${returnSec}`;
    };

    const fetchData = () => {
        dispatch(setPublicMusic(id));
        setFetch(true);
    }

    console.log("musicOfCurrentUser",musicOfCurrentUser);
    console.log("currentMusic",currentMusic);
    console.log("currentPlayed = " , currentPlayed);

    

    //Oncherche la music 
    useEffect(()=>{
        if(fetch===false)
            fetchData();
        return () => {
            dispatch(unsetPublicMusic());
            dispatch(deleteMusisOfCurrentUser())
        };
    },[id]);

    // Chercher les musics de l'utilisateur courants ! 
    const fetchMusicOfCurrentArtist = (id) => {
        //id de l'user // on recoit que les musics avec aucune relation additive
        dispatch(setMusisOfCurrentUser(id));
    }

   // lorsque la music qu'on clické est charger , then we can get the others relative music 
    useEffect (()=>{
        if(currentMusic && musicOfCurrentUser === null)
            fetchMusicOfCurrentArtist(currentMusic.user_id);
    },[currentMusic]);
    
    
    if(currentMusic === null || musicOfCurrentUser === null)
        return (<> 
                <div class="d-flex align-content-center justify-content-center">
                        <Box  mt={50} >
                            <CircularProgress />
                        </Box> 
                </div> 
                </>
                )
    else
        if(currentPlayed===null)
            setCurrentPlayed(currentMusic);
    
    if(currentPlayed===null)
    {
            return <>   
                <Box mt={20} >
                    <CircularProgress />
                </Box> 
                    </>
    }

    
    const  handleClick = (e) => {
        const RestOfMusic = musicOfCurrentUser.find(music=>music.id==e.target.id)
        setCurrentPlayed(RestOfMusic);
    }

    // list des musics relative a l'artist de la music chargée
    const renderMusics = musicOfCurrentUser?.map(music=>{
        return (
            <div id={music.id} class="public-music-card" key={music.id}  >
                <div class="card-public-music-box">
                        <div class="card-public-music-artist-name"> {currentMusic.user.username}</div>
                    <div class="modif1"> 
                        <img src={"http://localhost:8000/"+music.photo}/>
                    </div>
                        <div class="card-public-music-name">{music.nom}</div>
                        <div class="card-public-music-play-pause">
                            <i id={music.id} onClick={handleClick}  class={currentPlayed.id==music.id ? " fa fa-pause-circle-o" : "fa fa-play-circle-o"}></i>
                        </div>
                </div>

            </div>
        )
    })

    return (
        <>
         <div class="public-musics-container" >
             <SideMusic />
             <div class="public-music-content">
                 <HeaderMusicComponent numberLikes={currentMusic.liked_count} userId={currentMusic.user_id} published={currentMusic.date_publication} artistName= {currentMusic.user.username} musicName ={currentMusic.nom} musicImage={"http://localhost:8000/"+currentMusic.photo} artistImage= {"http://localhost:8000/"+currentMusic.user.photo} />
                <div class="public-music-body">
                    <div class="public-music-body-title"> POPULAR ONE'S </div>
                    <div class="music-in-qeueu">
                        {renderMusics}
                    </div>

                </div>
             </div>
            
            <MusicPlayed username={currentMusic.user.username} currentMusic={currentPlayed} />
        </div>
        </>
    )
}

