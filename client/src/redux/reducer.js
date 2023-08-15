import { FETCH_DOGS, UPDATE_PAGES, UPLOAD_TEMP, SEARCH_DOGS, FILTER_BY_NAME, SHOW_ALL, UPDATE_ORDER_PARAMS, JUMP_PAGE } from './action_types'
import { orderDogs } from '../utils/orderDogs';

const initialState = {
    dogs: [],
    allDogs: [],
    pages: { itemOffset: 0, itemsPerPage: 12, itemsLength: 0 },
    temperaments: [],
    orderParams: { prop: "id", mode:"asc" },
    pageAdm : { numberPages: 0, itemsPerPage: 12, currentPage: 0}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case FETCH_DOGS:
            return {
                ...state,
                dogs: action.payload,
                allDogs : action.payload,
                pages: {
                    ...state.pages,
                    itemsLength: action.payload.length,
                },
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };

        case UPDATE_PAGES:
            return {
                ...state,
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
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
                pageAdm: { ...state.pageAdm,
                    numberPages: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(action.payload.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };
        case FILTER_BY_NAME:
            return {
                ...state,
                dogs: orderDogs(state.allDogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())), state.orderParams),
                pageAdm: {
                    ...state.pageAdm,
                    numberPages: Math.ceil(orderDogs(state.allDogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())), state.orderParams).length/state.pageAdm.itemsPerPage),
                    currentPage: Math.ceil(orderDogs(state.allDogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())), state.orderParams).length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
                }
            };
        case SHOW_ALL:
        return {
            ...state,
            dogs: orderDogs(state.allDogs, state.orderParams),
            pageAdm: { ...state.pageAdm,
                numberPages: Math.ceil(state.allDogs.length/state.pageAdm.itemsPerPage),
                currentPage: Math.ceil(state.allDogs.length/state.pageAdm.itemsPerPage) > 0? 1 : 0,
            }
        };
        case UPDATE_ORDER_PARAMS:
        return {
            ...state,
            orderParams: {
                ...state.orderParams, ...action.payload,
            }
        };
        case JUMP_PAGE:
        return {
            ...state,
            pageAdm: {
                ...state.pageAdm, currentPage: action.payload,
            }
        }
        default:
        return {...state};
    }
};

export default rootReducer;