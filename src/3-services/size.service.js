import axios from "axios";
const API_URL = "http://localhost:8000/api/";

const getSizes = () => {
    return axios.get(API_URL + `sizes`);
}

export default {
    getSizes,
}