import sizeService from "../3-services/size.service"
import { SET_ALL_SIZES } from "./types"

export const setSizes = () => (dispatch) => {
    sizeService.getSizes().then(response=>{
        console.log("response",response.data);
        dispatch({
            type:SET_ALL_SIZES,
            payload:response.data
        })
    })
    
}