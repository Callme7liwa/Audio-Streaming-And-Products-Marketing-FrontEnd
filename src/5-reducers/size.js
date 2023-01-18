import { SET_ALL_SIZES } from "../4-actions/types";
const initialState = {
    sizes:null
}

export default function (state=initialState , action)
{
    const { type, payload } = action;
    switch (type)
    {
        case SET_ALL_SIZES :
            return {
                ...state , 
                sizes:payload
            };
        default :
            return state ; 
    }
}