import axios from "axios";

const API_URL = "http://localhost:8000/api/";

// const getProducts = () => {
//         return axios
//         .get("https://fakestoreapi.com/products"); 
// }
const getProduct =   (id) => {
        return axios
        .get( API_URL + `products/${id}`); 
}

const getMyOwnProduct = () => {
        return axios
        .get(
                API_URL+"user/products"
        );
}

const getMyProductLiked = () => {
        return axios
        .get(
                API_URL+"user/products/liked"
                );
}

const unlikeProduct = (id) => {
        return axios
        .post(API_URL+`unlike/product/${id}`)
}

const deleteProduct = (id) => {
        return axios.post(API_URL + `delete/product/${id}`);
}

const accepteProduct = (id) => {
        return axios.post(API_URL + `accepte/product/${id}`);
}

const getProducts = () => {
        return axios.get(API_URL + `products`);
}

const getCustomsProducts = () => {
        return axios.get(API_URL + `products/categories/sizes`);
}

const getProductsRelationShip = (id) => {
        return axios.get(API_URL + `categories/products/${id}`)
}

const getProductsWithCategoryId = () => {
        return axios.get(API_URL+ 'getProducts');
}

const getAllProductsInDB = () => {
        return axios.get(API_URL + 'dataBase/products');
}

const addNewProduct = (product) => {
        return axios.post(API_URL + `products`,product);
}

export default {
  getProducts,
  getCustomsProducts,
  getProduct,
  getMyOwnProduct,
  getMyProductLiked,
  unlikeProduct,
  deleteProduct,
  accepteProduct,
  getProductsRelationShip,
  getProductsWithCategoryId,
  getAllProductsInDB,
  addNewProduct
}
