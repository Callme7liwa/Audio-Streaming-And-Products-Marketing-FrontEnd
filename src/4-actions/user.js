import { ACTIVE_ACCOUNT, BANNE_ACCOUNT, DELETE_ACCOUNT, DESACTIVE_ACCOUNT, FOLLOW_ARTIST, FOLLOW_SIMPLE_ARTIST, GET_USER,GET_USERS_ACCEPTED,GET_USERS_BANNED,GET_USERS_QEUEU,LIKE_MUSIC_BY_AUTHENTICATED,SEARCH_USER,SET_ARTISTS_FOLLOWER_BY_USER_AUTHENTICATED,SET_MUSICS_OF_USERS_WICH_IM_FOLLOWING,SET_MUSIC_LIKED,SET_MUSIC_LIKED_BY_AUTHENTICATED,SET_PRODUCTS_OF_USERS_WICH_IM_FOLLOWING,SET_UNFOLLOW_ARTIST_OF_CURRENT_USER,SET_USERS, UNFOLLOW_ARTIST, UN_BANNE_ACCOUNT, UN_LIKE_MUSIC_BY_AUTHENTICATED } from "./types";
import userService from "../3-services/user.service"

export const getUsers = () => (dispatch) => {
    userService
    .getAllUsers ()
    .then(response=>{
        dispatch({
            type:SET_USERS,
            payload:response.data
        })
    })   
}

export const getUsersQeueu  = () => (dispatch) => {
    dispatch({
        type:GET_USERS_QEUEU
    })
} 

export const getUsersAccepted = () => (dispatch) => {
    dispatch({
        type:GET_USERS_ACCEPTED
    })
}

export const getUsersBanned = () => (dispatch) => {
    dispatch ({
        type : GET_USERS_BANNED , 
    })
}

export const activeAccount = (id) => (dispatch) => {
    userService.activeAccount(id).then(response=>{
        dispatch({
            type: ACTIVE_ACCOUNT,
            payload:id
        })
    })
}

export const desactiveAccount = (id) => (dispatch) => {
    userService.desactiveAccount(id).then(()=>{
        dispatch({
            type: DESACTIVE_ACCOUNT,
            payload:id
        })
    })
}

export const banneAccount = (id) => (dispatch) => {
    userService.banneAccount(id).then(()=>{
       dispatch({
            type: BANNE_ACCOUNT,
            payload:id
        })  
    })
}

export const deleteAccount = (id) => (dispatch) => {
    userService.deleteAccount(id).then(()=>{
        dispatch({
            type:DELETE_ACCOUNT,
            payload:id
        });
    });
}

export const unbannAccount = (id) => (dispatch) => {
    userService.activeAccount(id).then(()=>{
        dispatch({
            type:UN_BANNE_ACCOUNT,
            payload:id
        });
    });
}

export const searchUser = (name) => (dispatch) => {
    dispatch ({
        type:SEARCH_USER, 
        payload:name 
    })
}



export const setUsersFollowedByUserAuthenticated = (id) => (dispatch)=>{
    userService.getFriends(id).then((response)=>{
        dispatch(
            {
                type:SET_ARTISTS_FOLLOWER_BY_USER_AUTHENTICATED,
                payload:response.data
           }
        )
    })
}

export const unfollow = (id,user) => (dispatch) => {
    userService.unFollow(id).then((response)=>{
        dispatch({
            type:UNFOLLOW_ARTIST,
            payload:id 
        })
    })
}

export const follow = (idUser,user) => (dispatch) => {
     userService.Follow(idUser).then((response)=>{
        dispatch({
            type:FOLLOW_ARTIST,
            payload:{
                id:idUser,
                user:user
            }
        });
     })
}


export const followSimple = (idUser) => (dispatch) => {
    userService.FollowSimple(idUser).then((response)=>{
        dispatch({
            type:FOLLOW_SIMPLE_ARTIST,
            payload:idUser
        })
    })
}

export const like = (id,music) => (dispatch) => {
    userService.Like(id).then((response)=>{
        console.log(response);
        dispatch({
            type:LIKE_MUSIC_BY_AUTHENTICATED,
            payload:music,
        })
    })
}

export const unlike = (id,music) => (dispatch) => {
    userService.unLike(id).then((response)=>{
        dispatch({
            type:UN_LIKE_MUSIC_BY_AUTHENTICATED,
            payload:id
        })
    })
}

export const setLikedMusicByAuthenticated = () => (dispatch) => {
    userService.getMusicsLiked().then(response=>{
        console.log(response.data);
        dispatch({
            type:SET_MUSIC_LIKED_BY_AUTHENTICATED,
            payload:response.data
        })
    })
}

export const getMusicsOfUsersWichImFollowing = ()  => (dispatch) => {
    userService.getMusicsOfUsersWhichImFollowing().then((response=>{
        dispatch(
            {
            type:SET_MUSICS_OF_USERS_WICH_IM_FOLLOWING,
            payload:response.data
        }
        )
    }))
}
export const getProductsOfUsersWichImFollowing = ()  => (dispatch) => {
    userService.getProductsOfUsersWhichImFollowing().then((response=>{
        console.log(response);
        dispatch(
            {
            type:SET_PRODUCTS_OF_USERS_WICH_IM_FOLLOWING,
            payload:response.data
        }
        )
    }))
}

export const setUnfollowUsers = () => (dispatch) => {
    userService.getUnFollowFriendsOfCurrentUser().then(response=>{
        dispatch({
            type:SET_UNFOLLOW_ARTIST_OF_CURRENT_USER,
            payload:response.data
        })
    })
}

