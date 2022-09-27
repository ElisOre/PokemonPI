import axios from 'axios';

export const GET_POKE = 'GET_POKE';
export const GET_POKE_NAME = 'GET_POKE_NAME';
export const GET_TYPES = 'GET_TYPES';
export const GET_DETAILS = 'GET_DETAILS';
export const CLEAR_DETAILS = 'CLEAR_DETAILS';
export const FILTER_BY_TYPE = 'FILTER_BY_TYPE';
export const FILTER_CREATED = 'FILTER_CREATED';
export const ORDER = 'ORDER';


export function getPokes() {
    return async (dispatch) => {
        var pedidoApi = await axios.get('http://localhost:3001/pokemons');
        dispatch({
            type: GET_POKE,
            payload: pedidoApi.data,
        });
    };
};

export function postPokes(payload) {
    return async () => {
        try {
            const info = await axios.post('http://localhost:3001/pokemons', payload);
            return info;
        } catch (error) {
            console.log(error);
        };
    };
};

export function getPokeName(name) {
    return async (dispatch) => {
        try {
            const info = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            return dispatch({
                type: GET_POKE_NAME,
                payload: info.data
            });
        } catch (error) {
            console.error(error);
        };
    };
};

export function getTypes() {
    return async (dispatch) => {
        try {
            const info = await axios.get('http://localhost:3001/types');
            return dispatch({
                type: GET_TYPES,
                payload: info.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};

export function getDetails(id) {
    return async (dispatch) => {
        try {
            const info = await axios.get(`http://localhost:3001/pokemons/${id}`);
            return dispatch({
                type: GET_DETAILS,
                payload: info.data
            });
        } catch (error) {
            console.log(error);
        };
    };
};

export function clearDetails() {
    return (dispatch) => {
        dispatch({
            type: CLEAR_DETAILS
        });
    };
};

export function filterByTypes(payload) {
    return {
        type: FILTER_BY_TYPE,
        payload
    };
};

export function filterOrigin(payload) {
    return ({
        type: FILTER_CREATED,
        payload
    });
};

export function order(payload) {
    return {
        type: ORDER,
        payload
    };
};