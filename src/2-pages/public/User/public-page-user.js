import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteFriendsOfCurrentArtist, deleteMusisOfCurrentUser, getFriendsOfCurrentArtist, setCurrentPublicArtist, setMusisOfCurrentUser, unSetCurrentPublicArtist } from "../../../4-actions/public";
import { HeaderArtistComponent } from "./header-artist-component";
import { SideMusic } from "../Side-Music";
import { CardPublicUser } from "./card-public-user";
import { CardCurrentMusic } from "./card-current-music";
import {MusicPlayed} from "./../music-played"
import { Box, CircularProgress } from "@mui/material";

export const PublicPageUser = (props) => {
    const {dispatch,followed,musicLiked}=props;
    const {currentFriendPublicArtist,currentPublicArtist,musicOfCurrentUser} = useSelector(state=>state.publicReducer);
    
    const [currentMusicPlaying,setCurrentMusicPlaying] = useState(null);    
    const {id} = useParams();

    useEffect(()=>{
        setCurrentMusicPlaying(null);
        dispatch(setCurrentPublicArtist(id));
        return () => {
            dispatch(deleteMusisOfCurrentUser());
            dispatch(deleteFriendsOfCurrentArtist());
            dispatch(unSetCurrentPublicArtist());
        };
    },[id]) ; 
    
    
 
 

    if(currentPublicArtist === null || currentPublicArtist===undefined)
        return <> 
                <div class="d-flex align-content-center justify-content-center">
                    <Box  mt={50} >
                        <CircularProgress />
                    </Box> 
                </div>
                </>
    else
    if(currentFriendPublicArtist===null )
    {
        dispatch(getFriendsOfCurrentArtist(currentPublicArtist.id));
        dispatch(setMusisOfCurrentUser(currentPublicArtist.id));
    }

    if(musicOfCurrentUser!==null && currentMusicPlaying===null)
    {
            setCurrentMusicPlaying( musicOfCurrentUser[Math.floor(Math.random()*musicOfCurrentUser.length)]);
    }
    

    const RenderUsers=currentFriendPublicArtist?.map(friend=>{
        return (
            <>  
                <CardPublicUser username={friend.username} photo={friend.photo} id={friend.id} />        
            </>
        )
    })
    //change musics
    const handleClick  = (e) => {
        const RestOfMusic = musicOfCurrentUser.find(music=>music.id==e.target.id)
        setCurrentMusicPlaying(RestOfMusic);
    }


    const RenderMusics = musicOfCurrentUser?.map((music)=>{
        return(
            <CardCurrentMusic handleClick={handleClick} dispatch={dispatch} musicLiked={musicLiked} username={currentPublicArtist.username} music={music} key={music.id} />
        )
    })

    

    return (
        <> 
            <div class="public-musics-container" >
                <SideMusic />
                <div class="public-music-content">
                    <HeaderArtistComponent user={currentPublicArtist} dispatch={dispatch} followed={followed} userId={currentPublicArtist.id}  artistName= {currentPublicArtist.username} artistImage= {"http://localhost:8000/"+currentPublicArtist.photo} />
                    <div class="public-music-body">
                        <div class="public-music-body-title"> RELATIONSHIP </div>
                        <div class="music-in-qeueu">
                            {RenderUsers}
                        </div>

                        <div class="card-current-music-container">
                            <div class="public-music-body-title"> HITS </div>
                            {RenderMusics}
                        </div>
                    </div>
                </div>
                { 
                    currentMusicPlaying !=null ? 
                    (
                     <MusicPlayed  username={currentPublicArtist.username} currentMusic={currentMusicPlaying} /> 
                    ) 
                    :
                    ''
                }
               
            </div>
        </>
        )
}