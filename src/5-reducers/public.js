import { GET_PRODUCT_OF_CATEGORY, REMOVE_SELECTED_PUBLIC_PRODUCT, SET_CURRENT_PUBLIC_ARTIST, SET_FRIENDS_CURRENT_PUBLIC_ARTIST, SET_MUSICS_OF_CURRENT_PUBLIC_ARTIST, SET_PRODUCTS_SAME_CATEGORY, SET_PRODUCTS_SAME_SELLER, SET_PRODUCTS_WITH_CATEGORYID, SET_PUBLIC_MUSIC, SET_PUBLIC_MUSICS, SET_PUBLIC_PRODUCT, SET_PUBLIC_PRODUCTS, UNFOLLOW_ARTIST, UNSET_CURRENT_PUBLIC_ARTIST, UNSET_FRIENDS_CURRENT_PUBLIC_ARTIST, UNSET_MUSICS_OF_CURRENT_PUBLIC_ARTIST, UNSET_PUBLIC_MUSIC } from "../4-actions/types";

const initialState = {
    musics : null , 
    currentMusic : null ,
    musicOfCurrentUser:null, 
    currentPublicArtist:null,
    currentFriendPublicArtist:null,
    //
    products : null ,
    productsDisplaying:null,
    productsWithCategoryId:null,
    // 
    currentProduct:null,
    sameCurrentProductsCategory :null,
    sameCurrentProductsSeller:null,
}

export default function (state=initialState,action)
{
    const {type,payload} = action ; 
    switch(type)
    {
        case SET_PUBLIC_MUSICS : 
            return {
                ...state , 
                musics:payload  , 
            }
        case  SET_PUBLIC_MUSIC:
            return {
                ...state , 
                currentMusic:payload
            }
        case UNSET_PUBLIC_MUSIC:
            return {
                ...state,
                currentMusic:null,
            }
        case SET_MUSICS_OF_CURRENT_PUBLIC_ARTIST:
            // const RestOfMusic = payload.filter(music=>music.id!==state.currentMusic.id);
            return {
                ...state , 
                musicOfCurrentUser:payload
            }
        case SET_CURRENT_PUBLIC_ARTIST : 
            return {
                ...state, 
                currentPublicArtist:payload
            }
        case UNSET_CURRENT_PUBLIC_ARTIST  : 
        return {
            ...state , 
            currentPublicArtist:null
        }
        case SET_FRIENDS_CURRENT_PUBLIC_ARTIST:
            return {
                ...state,
                currentFriendPublicArtist:payload
            }
        case UNSET_FRIENDS_CURRENT_PUBLIC_ARTIST :
            return {
                ...state,
                currentFriendPublicArtist:null,
            };
        case UNSET_MUSICS_OF_CURRENT_PUBLIC_ARTIST:
            return {
                ...state,
                musicOfCurrentUser:null
            };
        case SET_PUBLIC_PRODUCTS:
            return {
                 ...state,
                 products:payload,
                 productsDisplaying:payload
            };
        case SET_PRODUCTS_WITH_CATEGORYID:
            return {
                ...state,
                productsWithCategoryId:payload
            }
        case SET_PUBLIC_PRODUCT:
            return {
                ...state,
                currentProduct:payload
            };
        case GET_PRODUCT_OF_CATEGORY :
            let productsFiltred =null;
            if(payload!=0)
                 productsFiltred = state.productsWithCategoryId.filter(product=>product.categoryId==payload);
            else
                productsFiltred = state.products;
            
                console.log("myProductFiltred for id=",payload,"are = ",productsFiltred);
            return {
                ...state,
                productsDisplaying:productsFiltred
            }
        case REMOVE_SELECTED_PUBLIC_PRODUCT : 
            return {
                ...state, 
                currentProduct:null,
            }
        case SET_PRODUCTS_SAME_CATEGORY : 
            return {
                ...state,
                sameCurrentProductsCategory:payload
            }
        case SET_PRODUCTS_SAME_SELLER : 
            return {
                ...state,
                sameCurrentProductsSeller:payload
            }

                
        default: 
            return state ;
    }
}