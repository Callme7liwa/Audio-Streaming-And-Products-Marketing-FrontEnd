import { GET_CATEGORIES } from "../4-actions/types";

const initialState = {
    categories:null
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type)
    {
        case GET_CATEGORIES :
            return {
                ...state , 
                categories:payload
            };
        default :
            return state ; 
    }
  }
  