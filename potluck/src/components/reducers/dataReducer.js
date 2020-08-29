import {FETCHING_EVENTS_START,FETCHING_EVENTS_SUCCESS,FETCHING_EVENTS_ERROR, 
    POSTING_LOGIN_START,POSTING_LOGIN_SUCCESS,POSTING_LOGIN_ERROR, POSTING_REGISTRATION_START,POSTING_REGISTRATION_SUCCESS,POSTING_REGISTRATION_ERROR} from '../actions/actionsIndex';

export const initialState = {
    data: [],
    isFetching: false,
    isPosting: false,
    isPutting: false,
    isDeleting: false,
    error: ''
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_EVENTS_START:
            return {
                ...state,
                isFetching:true
            }
        case FETCHING_EVENTS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                data: action.payload,
                error: ''
            }
        case FETCHING_EVENTS_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case POSTING_LOGIN_START:
            return {
                ...state,
                isPosting: true,
                data: [...state.data]
            }
        case POSTING_LOGIN_SUCCESS:
            return {
                ...state,
                isPosting: false,
                data: action.payload,
                error: ''
            }
        case POSTING_LOGIN_ERROR:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
        case POSTING_REGISTRATION_START:
            return {
                ...state,
                isPosting: true,
                data: [...state.data]
            }
        case POSTING_REGISTRATION_SUCCESS:
            return {
                ...state,
                isPosting: false,
                data: action.payload,
                error: ''
            }
        case POSTING_REGISTRATION_ERROR:
            return {
                ...state,
                isPosting: false,
                error: action.payload
            }
            default:
                return state
    }

}