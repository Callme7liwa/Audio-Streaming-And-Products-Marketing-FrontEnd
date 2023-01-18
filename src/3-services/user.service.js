import axios from "axios";


const API_URL = "http://localhost:8000/api/";

const  getAllUsers =  () => {
    return axios.get(
        API_URL + "users"
        );
}

const getUserBoard = () => {
    return axios.get(API_URL+"user");
}

const getModeratorBoard = () => {
    return axios.get(API_URL+"moderateur");
}

const activeAccount = (id) => {
    return axios.post(API_URL+`accepte/user/${id}`)
}

const banneAccount = (id) => {
    return axios.post(API_URL+`banne/user/${id}`)
}

const desactiveAccount = (id) => {
    return axios.post(API_URL+`desactive/user/${id}`)
}

const deleteAccount = (id) => {
    return axios.post(API_URL+`delete/user/${id}`)
}

export const getMusicOfAnUser = (id)  => {
    return axios.get(API_URL+`musicsByUser/${id}`)
}

export const getCurrentUser = (id) => {
    return axios.get(API_URL+`users/${id}`)
}

export const getFriends = (id) => {
    return axios.get(API_URL+`getFriends/${id}`)
}
export const getUnFollowFriendsOfCurrentUser = (id) => {
    return axios.get(API_URL+`getUnfollowPerson`)
}

export const unFollow = (id) => {
    return axios.delete(API_URL+`unfollow/user/${id}`)
}

export const Follow = (id) => {
    return axios.post(API_URL+`follow/user/${id}`)
}

export const FollowSimple = (id) => {
    return axios.post(API_URL+`followSimple/user/${id}`)
}

export const Like = (id) => {
    return axios.post(API_URL+`like/music/${id}`)
}
export const unLike = (id) => {
    return axios.post(API_URL+`unlike/music/${id}`)
}

export const getMusicsLiked = () => {
    return axios.get(API_URL+`user/musics/liked`)
}

export const getMusicsOfUsersWhichImFollowing = () => {
    return axios.get(API_URL+`musics/users/followed`);
}
export const getProductsOfUsersWhichImFollowing = () => {
    return axios.get(API_URL+`products/users/followed`);
}



export  default {
    getAllUsers,
    getUserBoard,
    getModeratorBoard,
    activeAccount,
    banneAccount,
    desactiveAccount,
    deleteAccount,
    getMusicOfAnUser,
    getCurrentUser , 
    getFriends,
    unFollow,
    Follow,
    FollowSimple,
    Like,
    unLike,
    getMusicsLiked,
    getMusicsOfUsersWhichImFollowing,
    getUnFollowFriendsOfCurrentUser,
    getProductsOfUsersWhichImFollowing,
}