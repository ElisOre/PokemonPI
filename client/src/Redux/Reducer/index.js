// import actions
import { GET_POKE } from '../Actions';

// estado inicial
let initialState = {
    pokes: [],
    copyPokes: [],
    types: [],
    details: [],
    filters: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKE:
            return {
                ...state,
                pokes: action.payload,
                copyPokes: action.payload
            };
        
        default:
            return state;
    };
};



export default rootReducer;