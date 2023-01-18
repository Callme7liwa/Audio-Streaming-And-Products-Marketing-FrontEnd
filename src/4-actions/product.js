import productService from "../3-services/product.service"
import { GET_PRODUCTS,SET_PRODUCTS ,SET_PRODUCT,SET_PRODUCTS_BY_CATEGORY,REMOVE_SELECTED_PRODUCT, SET_MY_OWN_MUSIC, SET_MY_OWN_PRODUCT, MY_PRODUCT_QUEUE, MY_PRODUCT_ACCEPTED, MY_PRODUCT_LIKED, SET_PRODUCT_LIKED, UN_LIKE_PRODUCT, DELETE_PRODUCT, ACCEPTE_PRODUCT, SET_ALL_PRODUCTS_IN_DB, PRODUCT_ADDED_SUCCESFULY, SET_MESSAGE} from "./types";

export const getProducts = () => (dispatch) => {
    productService
    .getProducts()
    .then(response=>{
        dispatch({
            type:SET_PRODUCTS,
            payload:response.data 
        });
    })
}

export const setAllProductsInDB = () => (dispatch) => {
    productService
    .getAllProductsInDB()
    .then(response=>{
        dispatch({
            type:SET_ALL_PRODUCTS_IN_DB,
            payload:response.data
        })
    },error=>{
        console.log(error,'error');
    })

}

export const getProduct = (id) => (dispatch) => {
    productService.getProduct(id).then(response=>{
        dispatch({
            type:SET_PRODUCT,
            payload:response.data,
        })
    },err=>{
        console.log("err");
    })
}

export const getProductByCategory = (category) => (dispatch)=>{
    
    dispatch({
        type:SET_PRODUCTS_BY_CATEGORY,
        payload:category
    });
}

export const removeSelectedProduct =() => (dispatch) => {
    dispatch ( {
        type:REMOVE_SELECTED_PRODUCT
    })
}

export const setOwnProduct = () => (dispatch) => {
    console.log("herrrrrrre");
    productService
            .getMyOwnProduct()
            .then(response=>{
                dispatch ({
                    type:SET_MY_OWN_PRODUCT,
                    payload:response.data
                })
            },erreur=>{
                console.log(erreur);
            })
}

export const getProductQueue = () => (dispatch) => {
    dispatch({
        type:MY_PRODUCT_QUEUE
    })
}

export const getProductAccepted = () => (dispatch) => {
    dispatch({
        type:MY_PRODUCT_ACCEPTED
    })
}

export const getMyProductLiked = () => (dispatch) => {
    productService
    .getMyProductLiked()
    .then(response =>{
        dispatch ({
            type:SET_PRODUCT_LIKED,
            payload:response.data  , 
        })
    })

}

export const unLikeProduct = ($id) => (dispatch) => {
    productService
    .unlikeProduct($id)
    .then(response=>{
        dispatch({
            type:UN_LIKE_PRODUCT,
            payload:$id
        })
        // window.location.reload(false);
    })
}

export const deleteProduct = (id) => (dispatch) => {
    productService.deleteProduct(id)
    .then(response=>{
        dispatch({
            type:DELETE_PRODUCT ,
            payload:id
        })
    })
    console.log("in dispatch id = ",id);
}

export const accepteProduct = (id) => (dispatch) => {
    productService.accepteProduct(id)
    .then(response=>{
        dispatch({
            type:ACCEPTE_PRODUCT , 
            payload:id
        })
    })
}

export const addNewProduct = (data) => (dispatch) => {
    productService.addNewProduct(data)
    .then(response=>{
        console.log(response);
        if(response.status == 201)
            dispatch({
                type:SET_MESSAGE ,
                payload :"success , product added succesfuly"
            })
    })
}