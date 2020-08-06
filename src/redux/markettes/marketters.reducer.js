import { act } from "react-dom/test-utils";

const INITIAL_STATE = {
    list: []
}

const markettersReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SET_NEW_MARKETTERS_LIST' : {
            return({
                ...state,
                list:action.payload
            })
        }

        default:{
            return(INITIAL_STATE);
        }
    }
}

export default markettersReducer;