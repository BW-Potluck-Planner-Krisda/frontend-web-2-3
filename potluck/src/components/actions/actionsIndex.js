import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const FETCHING_EVENTS_START = 'FETCHING_EVENT_START';
export const FETCHING_EVENTS_SUCCESS = 'FETCHING_EVENT_SUCCESS';
export const FETCHING_EVENTS_ERROR = 'FETCHING_EVENT_ERROR';

export const fetchingEvents = () => (dispatch) => {
    dispatch({ type: FETCHING_EVENTS_START })
    axiosWithAuth()
        .get('unknown')
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

export const postingLogin = (credentials) => (dispatch) => {
    dispatch({ type: POSTING_LOGIN_START })
    axios.post('https://reqres.in/api/login', credentials)
        .then(res => {
            if (res.status) {
                 localStorage.setItem('token', JSON.stringify(res.data.token))
                window.location.href = '/home'
            } else {
                 window.location.href = '/Login'
            }
            console.log('from postingLogin:start', res)
            dispatch({ type: POSTING_LOGIN_SUCCESS, payload: res.data })

        })
        .catch(err => {
            console.error('from postingLogin:error', err)
            dispatch({ type: POSTING_LOGIN_ERROR, payload: err })
        })
}

export const POSTING_REGISTRATION_START = 'POSTING_REGISTRATION_START';
export const POSTING_REGISTRATION_SUCCESS = 'POSTING_REGISTRATION_SUCCESS';
export const POSTING_REGISTRATION_ERROR = 'POSTING_REGISTRATION_ERROR';


export const postingRegistration = (credentials) => (dispatch) => {
    dispatch({ type: POSTING_REGISTRATION_START })
    axios.post('https://reqres.in/api/register', credentials)
        .then(res => {
            console.log('from postingRegistration:start', res)
            dispatch({ type: POSTING_REGISTRATION_SUCCESS, payload: res.data })
            window.location.href = '/Login'
        })
        .catch(err => {
            console.error('from postingRegistration:error', err)
            dispatch({ type: POSTING_REGISTRATION_ERROR, payload: err })
        })
}
