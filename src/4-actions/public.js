import productService from "../3-services/product.service"
import userService from "../3-services/user.service"
import musicService from "./../3-services/music.service"
import { SET_PUBLIC_MUSIC, SET_PUBLIC_MUSICS, UNSET_PUBLIC_MUSIC,SET_MUSICS_OF_CURRENT_PUBLIC_ARTIST, SET_CURRENT_PUBLIC_ARTIST, SET_FRIENDS_CURRENT_PUBLIC_ARTIST, UNSET_FRIENDS_CURRENT_PUBLIC_ARTIST, UNSET_MUSICS_OF_CURRENT_PUBLIC_ARTIST, UNSET_CURRENT_PUBLIC_ARTIST, SET_PUBLIC_PRODUCTS, SET_PUBLIC_PRODUCT, REMOVE_SELECTED_PUBLIC_PRODUCT, SET_PRODUCTS_SAME_CATEGORY, SET_PRODUCTS_SAME_SELLER, SET_PRODUCTS_WITH_CATEGORYID, GET_PRODUCT_OF_CATEGORY } from "./types"

export const setPublicMusics = () => (dispatch)  => {
    musicService.getMusicWithUsers().then((response)=>{
        dispatch({
            type:SET_PUBLIC_MUSICS,
            payload:response.data 
        })
    })
}

export const setPublicMusic = (id) => (dispatch) => {
    //On recoit comme reponse la music avec l'artist 
    musicService.getMusicById(id).then((response)=>{
        console.log(response);
        dispatch({
            type:SET_PUBLIC_MUSIC,
            payload:response.data
        })  
    },error=>{
        console.log("my eroor",error);
    }) 
}

export const unsetPublicMusic = () => (dispatch) => {
    dispatch( {
        type:UNSET_PUBLIC_MUSIC,
    })
}

export const setMusisOfCurrentUser = (id) => (dispatch) => {
    userService.getMusicOfAnUser(id).then((response)=>{
        dispatch({
            type :SET_MUSICS_OF_CURRENT_PUBLIC_ARTIST,
            payload:response.data
        },error=>{
            console.log("error please");
        })
    })
}

export const setCurrentPublicArtist = (id) => (dispatch) => {
    userService.getCurrentUser(id).then((response)=>{
        dispatch({
            type:SET_CURRENT_PUBLIC_ARTIST,
            payload:response.data
        })
    })
}

export const unSetCurrentPublicArtist = () =>(dispatch) => {
    dispatch({
        type:UNSET_CURRENT_PUBLIC_ARTIST 
    })
}

export const getFriendsOfCurrentArtist = (id) => (dispatch)=>{
     userService.getFriends(id).then((response)=>{
         dispatch(
             {
                 type:SET_FRIENDS_CURRENT_PUBLIC_ARTIST,
                 payload:response.data
            }
         )
     })
}

export const deleteFriendsOfCurrentArtist = () => (dispatch) => {
    dispatch({
        type:UNSET_FRIENDS_CURRENT_PUBLIC_ARTIST
    })
}

export const deleteMusisOfCurrentUser = () => (dispatch) => {
    dispatch({
        type:UNSET_MUSICS_OF_CURRENT_PUBLIC_ARTIST
    })
}

export const setProductsPublic = () => (dispatch) => {

    productService.getProducts().then(response=>{
        console.log(response);

        dispatch({
            type:SET_PUBLIC_PRODUCTS , 
            payload:response.data
        })
    })
}

export const getPublicProduct = (id) => (dispatch) => {
    productService.getProduct(id).then(response=>{
        dispatch({
            type : SET_PUBLIC_PRODUCT,
            payload:response.data 
        })
    })
}

export const removeSelectedPublicProduct = () => (dispatch) => {
    dispatch({
        type:REMOVE_SELECTED_PUBLIC_PRODUCT,
    })
}

export const getProductsRelationShip = (id) => (dispatch) => {
    productService.getProductsRelationShip(id).then(response=>{
        // console.log(response.data.productsSameCategory);
        dispatch({
            type:SET_PRODUCTS_SAME_CATEGORY,
            payload:response.data.productsSameCategory
        })
        dispatch({
            type:SET_PRODUCTS_SAME_SELLER,
            payload:response.data.productsSameSeller
        })
    })
   
}

export const setProductsWithCategoryId = () => (dispatch) => {
    productService.getProductsWithCategoryId().then(response=>{
        dispatch({
            payload:response.data,
            type:SET_PRODUCTS_WITH_CATEGORYID
        })
    })
}

export const getProductsOfAnCategory = (id) => (dispatch) => {
    dispatch({
        payload:id,
        type:GET_PRODUCT_OF_CATEGORY,
    })
}




