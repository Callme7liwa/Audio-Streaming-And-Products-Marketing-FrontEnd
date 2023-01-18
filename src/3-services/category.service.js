import axios from "axios";


const API_URL = "http://localhost:8000/api/";

const getCategories = () => {
    return axios.get(API_URL+"categories");
}

export default {
    getCategories,
}