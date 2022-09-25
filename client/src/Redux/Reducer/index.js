// import actions
import {
    GET_POKE, GET_POKE_NAME, GET_TYPES, GET_DETAILS, FILTER_BY_TYPE,
    FILTER_CREATED, SORT, CLEAR_DETAILS
} from '../Actions';

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
        case GET_POKE_NAME:
            return {
                ...state,
                pokes: action.payload
            };

        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            };

        case CLEAR_DETAILS:
            return {
                ...state,
                details: []
            };

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            };

        case 'POST_POKE':
            return {
                ...state
            };

        case FILTER_BY_TYPE:
            const copyPokes = state.copyPokes;
            const filters = action.payload === 'types' ? copyPokes : copyPokes.filter(e =>
                e.types.includes(action.payload)
            );
            return {
                ...state,
                pokes: filters
            };

        case FILTER_CREATED:
            const created = action.payload === 'created' ? state.copyPokes.filter(e =>
                e.create) : state.copyPokes.filter(e => !e.create);
            return {
                ...state,
                pokes: action.payload === 'allp' ? state.copyPokes : created
            };

        case SORT:
            let orderedCharacters

            if (action.payload === 'asc') {
                orderedCharacters = state.copyPokes.slice().sort((a, b) => a.name.localeCompare(b.name));
            };

            if (action.payload === 'desc') {
                orderedCharacters = state.copyPokes.slice().sort((a, b) => b.name.localeCompare(a.name));
            };

            if (action.payload === 'min') {
                orderedCharacters = state.copyPokes.slice().sort((a, b) => a.attack - b.attack);
            };

            if (action.payload === 'max') {
                orderedCharacters = state.copyPokes.slice().sort((a, b) => b.attack - a.attack);
            };
            return {
                ...state,
                pokes: orderedCharacters || state.copyPokes
            };

        default:
            return state;
    };
};



export default rootReducer;