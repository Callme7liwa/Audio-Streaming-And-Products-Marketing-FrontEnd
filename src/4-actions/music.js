import musicService from "./../3-services/music.service"
import { setMessage } from "./message";
import { ACCEPTE_MUSIC, DELETE_MUSIC, MY_MUSIC_POSTED, MY_MUSIC_QUEUE, SET_ALL_MUSICS, SET_MUSIC_LIKED, SET_MY_OWN_MUSICS, UN_LIKE_MUSIC, UPDATE_MUSIC, UPDATE_MUSIC_POSTED, UPDATE_MUSIC_QEUEU } from "./types"

export const setMyOwnMusics = () => (dispatch) => {

    musicService.getMyOwnMusics().then(response=>{
        console.log(response);
        dispatch({
            type:SET_MY_OWN_MUSICS,
            payload:response.data
        })
    },error=>{
        console.log("erreur lors du get all music from the server",error);
    })
}

export const getMusicQueue = () => (dispatch) => {
    dispatch({
        type:MY_MUSIC_QUEUE
    })
}

export const getMusicPosted = () => (dispatch) =>{
    dispatch({
        type:MY_MUSIC_POSTED
    })
}

export const getMyMusicLiked = () => (dispatch) => {
    musicService
    .getMyMusicLiked()
    .then(response =>{
        dispatch ({
            type:SET_MUSIC_LIKED,
            payload:response.data , 
        })
    })
}

export const unLikeMusic = ($id) => (dispatch) => {
    musicService
    .unlikeMusic($id)
    .then(response=>{
        dispatch({
            type:UN_LIKE_MUSIC,
            payload:$id
        })
        // window.location.reload(false);
    })
}

export const accepteMusic = (music) => (dispatch) => {
    musicService.accepteMusic(music.id).then(response=>{
       
        dispatch({
            type:ACCEPTE_MUSIC,
            payload:response.data.music
        });
    });
};

export const deleteMusic = (music) => (dispatch) => {
    musicService.deleteMusic(music.id).then(response=>{
        console.log("deletation",response);
        dispatch({
            type:DELETE_MUSIC,
            payload:response.data.music
        });
    });
};

export const addNewMusic = (music) => (dispatch) => {
    musicService.addNewMusic(music).then(response=>{
        dispatch(setMessage("SUCCESS , MUSIC HAS BEEN ADDED SUCCESFULY"))
    })
}

export const updateMusicPosted = (id,music) => (dispatch) => {
    musicService.updateMusic(id,music).then(response=>{
        dispatch(setMessage("success,music has been updated succesfuly"));
        console.log(response);
        dispatch({
            type:UPDATE_MUSIC_POSTED,
            payload:response.data.music
        })
    },err=>{
        dispatch(setMessage("err,please try a gain !"))
    })
}

export const updateMusicQeueu = (id,music) => (dispatch) => {
    musicService.updateMusic(id,music).then(response=>{
        dispatch(setMessage("success,music has been updated succesfuly"));
        dispatch({
            type:UPDATE_MUSIC_QEUEU,
            payload:response.data.music
        })
    },err=>{
        dispatch(setMessage("err,please try a gain !"))
    })
}