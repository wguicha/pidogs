import { FETCH_DOGS, UPDATE_PAGES, UPLOAD_TEMP, SEARCH_DOGS, FILTER_BY_NAME, SHOW_ALL } from './action_types'

const initialState = {
    dogs: [],
    allDogs: [],
    pages: { itemOffset: 0, itemsPerPage: 12, itemsLength: 0 },
    temperaments: [],
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
                dogs: state.dogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())),
                pages: {
                    ...state.pages,
                    itemsLength: state.dogs.filter((dog) => dog.name.toLowerCase().includes(action.payload.toLowerCase())).length,
                }
            };
        case SHOW_ALL:
        return {
            ...state,
            dogs: state.allDogs,
            pages: {
                ...state.pages, itemsLength: state.allDogs.length,
            }
        };
        default:
        return {...state};
    }
};

export default rootReducer;