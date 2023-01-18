import { GET_PRODUCTS, SET_PRODUCTS , SET_PRODUCT, SET_PRODUCTS_BY_CATEGORY, REMOVE_SELECTED_PRODUCT, SET_MY_OWN_PRODUCT, MY_PRODUCT_QUEUE, MY_PRODUCT_ACCEPTED, MY_PRODUCT_LIKED, SET_PRODUCT_LIKED ,UN_LIKE_PRODUCT, DELETE_PRODUCT, ACCEPTE_PRODUCT, SET_ALL_PRODUCT_IN_DB, SET_ALL_PRODUCTS_IN_DB} from "../4-actions/types";

const initialState = {
    products:null,
    currentProduct:null,
    productsByCategory:null,
    myProduct : null,
    productOwnerQueue:null,
    productOwnerAccepted:null,
    productsLiked:null,
    artistfollowing:null,
    allProductsInDb:null,
}

export default function (state=initialState , action)
{
    const {type,payload} = action ; 
    switch (type)
    {
        case SET_PRODUCTS : 
        return {
            ...state,
            products:payload
        };
        case SET_ALL_PRODUCTS_IN_DB:
            return {
                ...state,
                allProductsInDb:payload
            }
        case SET_PRODUCT :
            return {
                ...state,
                currentProduct:payload
            };
        case SET_PRODUCTS_BY_CATEGORY:
            const newProducts = state.products.filter((product)=>product.category===payload);
            return {
                ...state,
                productsByCategory:newProducts
            };
        case REMOVE_SELECTED_PRODUCT : 
            return {
                ...state , 
                currentProduct:null
            }
        case SET_MY_OWN_PRODUCT : 
            return {
                ...state, 
                myProduct :payload

            }
        case MY_PRODUCT_QUEUE  : 
             const productQueue = state.myProduct.filter((product)=>product.etat==0);
             return {
                ...state , 
                productOwnerQueue:productQueue
              }
        case MY_PRODUCT_ACCEPTED  : 
            const productAccepted = state.myProduct.filter((product)=>product.etat==1);
            return {
                ...state , 
                productOwnerAccepted:productAccepted
              }
        case SET_PRODUCT_LIKED  : 
            return {
                ...state , 
                productsLiked:payload
              }
        case UN_LIKE_PRODUCT :
            const ProduitsAimees = state.productsLiked.filter((product)=>product.id!==payload);
              return {
                  ...state,
                  productsLiked:ProduitsAimees
              }
        case DELETE_PRODUCT:
             let RestOfProductsAfterDelete = state.myProduct?.filter((product)=>product.id!==payload); 
             let RestOfProductQeueuAfterDelete = state.productOwnerQueue?.filter((product)=>product.id!==payload); 
             let RestOfProductAcceptedAfterDelete = state.productOwnerAccepted?.filter((product)=>product.id!==payload); 
            return {
                ...state,
                myProduct:RestOfProductsAfterDelete,
                productOwnerQueue:RestOfProductQeueuAfterDelete,
                productOwnerAccepted:RestOfProductAcceptedAfterDelete,
            }
        case ACCEPTE_PRODUCT : 
            let RestOfProductQeueuAfterAccepte = state.productOwnerQueue?.filter((product)=>product.id!=payload);
            return {
                ...state,
                productOwnerQueue:RestOfProductQeueuAfterAccepte
            }
        default : 
            return state ; 
    }
}