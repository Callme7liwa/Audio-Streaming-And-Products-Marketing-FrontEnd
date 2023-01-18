import categoryService from "../3-services/category.service"
import { GET_CATEGORIES } from "./types"

export const getAllGategories = ()=> (dispatch) => {
    categoryService.getCategories().then((response)=>{
        dispatch({
            type:GET_CATEGORIES,
            payload:response.data
        })
    })
}