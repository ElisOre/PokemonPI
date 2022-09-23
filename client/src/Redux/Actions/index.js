import axios from 'axios';

export const GET_POKE = 'GET_POKE';

export const getPokes = () => {
    return async (dispatch) => {
        try {
            let pedidoApi = await axios.get('http://localhost:3001/pokemons');
            dispatch({
                type: GET_POKE,
                payload: pedidoApi.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};