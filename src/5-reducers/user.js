import { ACTIVE_ACCOUNT, BANNE_ACCOUNT, DELETE_ACCOUNT, DESACTIVE_ACCOUNT, FOLLOW_ARTIST, FOLLOW_SIMPLE_ARTIST, GET_USERS,GET_USERS_ACCEPTED,GET_USERS_BANNED,GET_USERS_QEUEU,LIKE_MUSIC_BY_AUTHENTICATED,SEARCH_USER,SET_ARTISTS_FOLLOWER_BY_USER_AUTHENTICATED,SET_MUSICS_OF_USERS_WICH_IM_FOLLOWING,SET_MUSIC_LIKED,SET_MUSIC_LIKED_BY_AUTHENTICATED,SET_PRODUCTS_OF_USERS_WICH_IM_FOLLOWING,SET_UNFOLLOW_ARTIST_OF_CURRENT_USER,SET_USERS, UNFOLLOW_ARTIST, UN_BANNE_ACCOUNT, UN_LIKE_MUSIC_BY_AUTHENTICATED } from "../4-actions/types";

const initialState = {
    users:null,
    usersReserve:null,
    usersQeueu:null,
    usersAccepted:null , 
    usersBanned : null ,
    ArtisteFollowedByAuthenticated:null,
    ArtisteUnFollowedByAuthenticated:null,
    musicLikedByAuthenticated:null,
    musicOfUsersFollowedByAuthenticated:null ,
    productsOfUsersFollowedByAuthenticated:null,
}
export default function (state=initialState , action )
{
    const {type , payload} = action ; 
    switch(type)
    {
        case SET_USERS :
            const usersFiltred = payload.filter(user=>(user.is_admin!==1))
            return  {
                ...state,
                users:usersFiltred,
                usersReserve:usersFiltred,
            };
        case GET_USERS_QEUEU : 
            const usersQeueuFiltred = state.users.filter(user=>(user.etat==0  && user.banned==0));
            return {
                ...state,
                usersQeueu:usersQeueuFiltred
            }
        case GET_USERS_ACCEPTED :
            const usersAcceptedFiltred = state.users.filter(user=>(user.banned==0 && user.etat==1))
            return {
                ...state,
                usersAccepted:usersAcceptedFiltred
            }
        case GET_USERS_BANNED : 
            const usersBannedFiltred = state.users.filter (user=>(user.banned==1 ))
            return {
                ...state , 
                usersBanned:usersBannedFiltred
            }
        case ACTIVE_ACCOUNT : 
            const RestOfQeueuAccount = state.usersQeueu.filter(user=>(user.id!==payload))
            return {
                ... state,
                usersQeueu:RestOfQeueuAccount
            }
        case DESACTIVE_ACCOUNT : 
            const RestOfActivatedAccount = state.usersAccepted.filter(user=>(user.id!==payload))
            return {
                ... state,
                usersAccepted:RestOfActivatedAccount
            }
        case DELETE_ACCOUNT : 
            const RestOfUsers = state.users.filter(user=>(user.id!==payload));
            const RestOfUsersQeueu = state.usersQeueu.filter(user=>(user.id!==payload))
            return {
                ...state , 
                usersQeueu:RestOfUsersQeueu
            }
        case UN_BANNE_ACCOUNT : 
            const RestOfBannedAccounts = state.usersBanned.filter(user=>(user.id!==payload))
                return {
                    ...state,
                    usersBanned:RestOfBannedAccounts
                }
        case BANNE_ACCOUNT : 
            const RestOfUserAccepted = state.usersAccepted.filter(user=>(user.id!==payload))
            return {
                ...state,
                usersAccepted :RestOfUserAccepted
            }
        case SEARCH_USER : 
            const newPayload = payload.replace(/\s/g,'');
            console.log(newPayload);
            if(newPayload==null || newPayload.trim().length ===0  )
            {
                const RestOfUsers = state.usersReserve 
                return {
                    ...state,
                    users:RestOfUsers
                    }
            }
            else{
                const RestofUsers = state.usersReserve.filter((user)=>(user.username.includes(newPayload)))
                return {
                    ...state,
                     users:RestofUsers
                }
            }
        case SET_ARTISTS_FOLLOWER_BY_USER_AUTHENTICATED:
            return {
                ...state,
                ArtisteFollowedByAuthenticated:payload
            }
        //
        //
        case SET_UNFOLLOW_ARTIST_OF_CURRENT_USER:
            return {
                ...state,
                ArtisteUnFollowedByAuthenticated:payload
            }
        //
        //
        case UNFOLLOW_ARTIST:
            // const RestOfUnfollowed = state.ArtisteUnFollowedByAuthenticated.filter(artist=>artist.id!==payload);
            const RestOfFollowers = state.ArtisteFollowedByAuthenticated.filter(artist=>artist.id!==payload);
            return {
                ...state,
                ArtisteFollowedByAuthenticated:RestOfFollowers
                //ArtisteUnFollowedByAuthenticated:RestOfUnfollowed
            }
        //
        //
        case FOLLOW_ARTIST :
            const restful = state.ArtisteFollowedByAuthenticated;
            restful.push(payload.user);
            return {
                ...state , 
                ArtisteFollowedByAuthenticated:restful,
                // ArtisteUnFollowedByAuthenticated:RestOfArtisteUnFollowedByAuthenticated
            }
        //
        //
        case FOLLOW_SIMPLE_ARTIST:
            const RestOfSimpleUnFollowed =  state.ArtisteUnFollowedByAuthenticated.filter(user=>user.id!=payload)
            return {
                ...state,
                 ArtisteUnFollowedByAuthenticated:RestOfSimpleUnFollowed
            }
        //
        //
        case SET_MUSIC_LIKED_BY_AUTHENTICATED:
            return {
                ...state,
                musicLikedByAuthenticated:payload
            }
        //
        //
        case LIKE_MUSIC_BY_AUTHENTICATED  : 
            const fullMusicLiked = state.musicLikedByAuthenticated;
            fullMusicLiked.push(payload);
            return {
                ...state,
                musicLikedByAuthenticated:fullMusicLiked
            }
        //
        //
        case UN_LIKE_MUSIC_BY_AUTHENTICATED :
            const restOfLikedMusic = state.musicLikedByAuthenticated.filter((music)=>music.id!==payload)
            return {
                ...state,
                musicLikedByAuthenticated:restOfLikedMusic
            }
        //
        //
        case SET_MUSICS_OF_USERS_WICH_IM_FOLLOWING :
            return {
                ...state,
                musicOfUsersFollowedByAuthenticated:payload
            }
        //
        //
        case SET_PRODUCTS_OF_USERS_WICH_IM_FOLLOWING :
            return {
                ...state,
                productsOfUsersFollowedByAuthenticated:payload
            }
        //
        //
        default :
            return state ; 
    }
}