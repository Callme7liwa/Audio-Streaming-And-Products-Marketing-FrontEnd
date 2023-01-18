import axios from "axios";


const API_URL = "http://localhost:8000/api/";

const  getMyOwnMusics =  () => {
    return axios.get(
        API_URL + "musics/user/authenticated"
    );
}
const  getOne =  () => {
    return axios.get(
        API_URL + "getOne"
    );
}

export const getMusicOfAnUser = (id) => {
    return axios.get(
        API_URL + `musicsByUser/${id}`
    )
}

const getMyMusicLiked = () => {
    return axios
    .get(
            API_URL+"user/musics/liked"
    );
}

const unlikeMusic = (id) => {
    return axios
    .post(API_URL+`unlike/music/${id}`)
}

const getMusicWithUsers = () => {
    return axios.get(API_URL+'musicWithUsers');
}

//Charger la music avec les information de l'artist !
const getMusicById = (id) => {
    return axios.get(API_URL+`getOne/${id}`);
}

const addNewMusic = (music) => {
    return axios.post(API_URL + `musics`,music);
}

const accepteMusic = (id) => {
    return axios.post(API_URL + `accepte/music/${id}`);
}
const deleteMusic = (id) => {
    return axios.post(API_URL + `delete/music/${id}`);
}

const updateMusic = (id,music) => {
    return axios.post(API_URL+`musics/${id}`,music);
}

export default {
    getMyOwnMusics,
    getMyMusicLiked,
    unlikeMusic,
    getMusicWithUsers,
    getMusicById,
    addNewMusic,
    accepteMusic,
    deleteMusic,
    updateMusic
    
}
