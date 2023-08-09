import { FETCH_DOGS, UPDATE_PAGES, UPLOAD_TEMP, SEARCH_DOGS, FILTER_BY_NAME, SHOW_ALL, UPDATE_ORDER_PARAMS } from './action_types'
import { orderDogs } from '../utils/orderDogs';

const initialState = {
    dogs: [],
    allDogs: [],
    pages: { itemOffset: 0, itemsPerPage: 12, itemsLength: 0 },
    temperaments: [],
    orderParams: { prop: "id", mode:"asc" }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs : action.payload,
                pages: {
                    ...state.pages, itemsLength: action.payload.length,
                }
            };

        case UPDATE_PAGES:
            return {
                ...state,
                pages: {
                    ...state.pages, itemOffset: action.payload,
                }
            };

        case UPLOAD_TEMP:
            return {
                ...state,
                temperaments: [
                    ...action.payload
                ]
            };
        case SEARCH_DOGS:
            return {
                ...state,
                dogs: action.payload,
                pages: {
                    ...state.pages, itemsLength: action.payload.length,
                }
            };
        case FILTER_BY_NAME:
            return {
                ...state,
                dogs: orderDogs(state.dogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())), state.orderParams),
                pages: {
                    ...state.pages,
                    itemsLength: state.dogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())).length,
                }
            };
        case SHOW_ALL:
        return {
            ...state,
            dogs: orderDogs(state.allDogs, state.orderParams),
            pages: {
                ...state.pages, itemsLength: state.allDogs.length,
            }
        };
        case UPDATE_ORDER_PARAMS:
        return {
            ...state,
            orderParams: {
                ...state.orderParams, ...action.payload,
            }
        };
        default:
        return {...state};
    }
};

export default rootReducer;