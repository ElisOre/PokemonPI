import axios from 'axios';

export const GET_POKE = 'GET_POKE';
export const GET_POKE_NAME = 'GET_POKE_NAME';
export const GET_TYPES = 'GET_TYPES';
export const GET_DETAILS = 'GET_DETAILS';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const SORT = 'SORT';

const link = 'http://localhost:3001';

export const getPokes = () => {
    return async (dispatch) => {
        // try {
        var pedidoApi = await axios.get(link + '/pokemons');
        dispatch({
            type: GET_POKE,
            payload: pedidoApi.data,
        });
        // } catch (error) {
        //     console.log(error);
        // };
    };
};

export const postPokes = (payload) => {
    return async () => {
        try {
            const info = await axios.post(link + '/pokemons', payload);
            return info;
        } catch (error) {
            console.log(error);
        };
    };
};

export function getPokeName(name) {
    return async (dispatch) => {
        try {
            const info = await axios.get(`${link}/pokemons?name=${name}`);
            return dispatch({
                type: GET_POKE_NAME,
                payload: info.data
            });
        } catch (error) {
            console.error(error);
        };
    };
};

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const info = await axios.get(link + '/types');
            return dispatch({
                type: GET_TYPES,
                payload: info.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};

export const getDetails = (id) => {
    return async (dispatch) => {
        try {
            const info = await axios.get(`${link}/pokemons/${id}`);
            return dispatch({
                type: GET_DETAILS,
                payload: info.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};

export const filterByTypes = (payload) => {
    return {
        type: FILTER_BY_TYPE,
        payload
    };
};

export const filterCreated = () => {
    return async (dispatch) => {
        const info = await axios.get(link + '/created');
        return dispatch({
            type: FILTER_CREATED,
            payload: info
        });
    };
};

export const sort = (order) => {
    return {
        type: SORT,
        payload: order
    };
};