import { ACCEPTE_MUSIC, DELETE_MUSIC, MY_MUSIC_POSTED, MY_MUSIC_QUEUE, SET_MUSIC_LIKED, SET_MY_OWN_MUSICS, UN_LIKE_MUSIC, UPDATE_MUSIC, UPDATE_MUSIC_POSTED, UPDATE_MUSIC_QEUEU } from "../4-actions/types";

const initialState = {
    myOwnMusics:null,
    musicOwnerQueue:null,
    musicOwnerPosted:[],
    myMusicLiked:null,
}

export default function (state=initialState , action )
{
    const {type,payload} = action ;

    switch(type)
    {
        case SET_MY_OWN_MUSICS :
            return {
                ...state , 
                myOwnMusics:payload
            }
        case MY_MUSIC_QUEUE  : 
            const musicQueue = state.myOwnMusics.filter((music)=>music.etat==0);
            console.log("My All Music Queue ",musicQueue)
            return {
                ...state , 
                musicOwnerQueue:musicQueue
            }
        case MY_MUSIC_POSTED : 
            const musicPosted = state.myOwnMusics.filter((music)=>music.etat==1);
            
            return {
                ...state , 
                musicOwnerPosted:musicPosted
            }
        case SET_MUSIC_LIKED  : 
            console.log("my product liked " , payload);
            return {
                ...state , 
                myMusicLiked:payload
                }
        case UN_LIKE_MUSIC :
            const RestOfMusic = state.myOwnMusics.filter((music)=>music.id!==payload);
                return {
                    ...state,
                    myMusicLiked:RestOfMusic
                }
        case ACCEPTE_MUSIC :
            const RestOfMusicQeueu = state.musicOwnerQueue.filter((music)=>music.id!==payload.id);
            return {
                ...state,
                musicOwnerQueue:RestOfMusicQeueu,
            }
        case DELETE_MUSIC :
                let RestOfMusicsAccepted=null;
                let RestOfMusicQeueuAfterDelete=null;
                if(state.musicOwnerPosted){ RestOfMusicsAccepted = state.musicOwnerPosted.filter(music=>music.id!==payload.id)};
                if(state.musicOwnerQueue) { RestOfMusicQeueuAfterDelete = state.musicOwnerQueue.filter((music)=>music.id!==payload.id)};
                return {
                    ...state,
                    musicOwnerPosted:RestOfMusicsAccepted,
                    musicOwnerQueue:RestOfMusicQeueuAfterDelete,
                }
        case UPDATE_MUSIC_POSTED :
            console.log("in reducer",payload) 
                let musicsAcceptedAfterUpdating = state.musicOwnerPosted.filter(music=>music.id!=payload.id);
                musicsAcceptedAfterUpdating.push(payload);
                musicsAcceptedAfterUpdating.sort((a, b) => a.id - b.id);
                return {
                    ...state,
                    musicOwnerPosted:musicsAcceptedAfterUpdating,
                }
        case UPDATE_MUSIC_QEUEU :
                let musicsQeueuAfterUpdating = state.musicOwnerQueue.filter(music=>music.id!=payload.id);
                musicsQeueuAfterUpdating.push(payload);
                musicsQeueuAfterUpdating.sort((a, b) => a.id - b.id);
                return {
                    ...state,
                    musicOwnerQueue:musicsQeueuAfterUpdating,
                }
        default : return state;
    }

}