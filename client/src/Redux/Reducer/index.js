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

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_POKE:
            return {
                ...state,
                pokes: payload,
                copyPokes: payload
            };
        
        default:
            return state;
    };
};



export default rootReducer;