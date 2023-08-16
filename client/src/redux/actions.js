import { FETCH_DOGS, UPDATE_PAGES, UPLOAD_TEMP, SEARCH_DOGS, FILTER_BY_NAME, SHOW_ALL, UPDATE_ORDER_PARAMS, JUMP_PAGE, ADD_DOG } from './action_types'
import axios from 'axios';

const URL = 'https://pidogs-9fgg.onrender.com/'

export const fetchDogs = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}dogs`, payload)
            .then(({ data }) => {
                return dispatch({
                    type: FETCH_DOGS,
                    payload: data,
                });
             });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const updatePages = (payload) => {
    return (dispatch) => dispatch({
        type: UPDATE_PAGES,
        payload: payload,
    })
}

export const uploadTemperaments = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}temperaments`, payload)
            .then(({ data }) => {
                return dispatch({
                    type: UPLOAD_TEMP,
                    payload: data,
                });
            });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const searchDogByKey = (payload) => {
    return async (dispatch) => {
        try {
            await axios.get(`${URL}dogs/${payload}`)
            .then(({ data }) => {
                console.log("data:",data)
                return dispatch({
                    type: SEARCH_DOGS,
                    payload: data,
                });
            });
        } catch (error) {
            console.error(error.message);
        }
    }
}

export const filterByName = (payload) => {
    return (dispatch) => dispatch({
        type: FILTER_BY_NAME,
        payload: payload,
    })
}

export const showAll = () => {
    return (dispatch) => dispatch({
        type: SHOW_ALL
    })
}

export const updateOrderParams = (payload) => {
    return (dispatch) => dispatch({
        type: UPDATE_ORDER_PARAMS,
        payload: payload,
    })
}

export const jumpPage = (payload) => {
    return (dispatch) => dispatch({
        type: JUMP_PAGE,
        payload: payload,
    })
}

export const addDog = (payload) => {
    console.log("payload:", payload);
    return (dispatch) => dispatch({
        type: ADD_DOG,
        payload: payload,
    })
}