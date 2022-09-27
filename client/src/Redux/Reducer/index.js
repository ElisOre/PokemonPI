// import actions
import {
    GET_POKE, GET_POKE_NAME, GET_TYPES, GET_DETAILS, FILTER_BY_TYPE,
    FILTER_CREATED, ORDER, CLEAR_DETAILS
} from '../Actions';

// estado inicial
let initialState = {
    pokes: [],
    copyPokes: [],
    types: [],
    details: [],
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
                e.types.includes(action.payload) || e.types.find(e => e.name === action.payload));
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

        case ORDER:
            const orderASC = action.payload === 'men' ?
                state.pokes.sort(function (a, b) {
                    if (a.attack > b.attack) {
                        return 1;
                    }
                    if (a.attack < b.attack) {
                        return -1
                    }
                    return 0;
                }) : action.payload === 'may' ?
                    state.pokes.sort(function (a, b) {
                        if (a.attack > b.attack) {
                            return -1;
                        }
                        if (a.attack < b.attack) {
                            return 1
                        }
                        return 0
                    }) : action.payload === 'asc' ?
                        state.pokes.sort(function (a, b) {
                            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                return 1;
                            }
                            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                return -1
                            }
                            return 0;
                        }) : action.payload === 'des' ?
                            state.pokes.sort(function (a, b) {
                                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                                    return -1;
                                }
                                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                                    return 1
                                }
                                return 0
                            }) : state.pokes

            return {
                ...state,
                pokes: orderASC

            }

        default:
            return state;
    };
};



export default rootReducer;