import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCHING_EVENTS_START = 'FETCHING_EVENT_START';
export const FETCHING_EVENTS_SUCCESS = 'FETCHING_EVENT_SUCCESS';
export const FETCHING_EVENTS_ERROR = 'FETCHING_EVENT_ERROR';

export const fetchingEvents = () => (dispatch) => {
    dispatch({ type: FETCHING_EVENTS_START })
    axiosWithAuth()
        .get('https://reqres.in/api/unknown')
        .then(res => {
            console.log('from fetchingEvents:start', res)
            dispatch({ type: FETCHING_EVENTS_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error('from fetchingEvents:error', err)
            dispatch({ type: FETCHING_EVENTS_ERROR, payload: err })
        })
}

export const POSTING_LOGIN_START = 'POSTING_LOGIN_START';
export const POSTING_LOGIN_SUCCESS = 'POSTING_LOGIN_SUCCESS';
export const POSTING_LOGIN_ERROR = 'POSTING_LOGIN_ERROR';

export const postingLogin = () => (dispatch) => {
    dispatch({ type: POSTING_LOGIN_START })
    axiosWithAuth()
        .post('https://reqres.in/api/users')
        .then(res => {
            console.log('from postingLogin:start', res)
            dispatch({ type: POSTING_LOGIN_SUCCESS, payload: res.data })
        })
        .catch(err => {
            console.error('from postingLogin:error', err)
            dispatch({ type: POSTING_LOGIN_ERROR, payload: err })
        })
}
