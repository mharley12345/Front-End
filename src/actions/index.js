//index.js for actions
/*dependencies*/
import { axiosWithAuth } from '../utils/AxiosWithAuth'
import axios from 'axios'

/*consts for error catching*/

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS_RECEIPTS = 'FETCH_SUCCESS_RECEIPTS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_RECEIPT = 'ADD_RECEIPT';
export const DELETE_RECEIPT = 'DELETE_RECEIPT';
export const LOGIN = 'LOGIN';

export const fetchReceipts = search => dispatch => {
    dispatch({ type: START_FETCHING });
    
    axiosWithAuth()
    .get("/auth/receipts/all")
    .then(res => dispatch({ type: FETCH_SUCCESS_RECEIPTS, payload: res.data}))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
    
    
}

export const addReceipt = newReceipt => dispatch => {
   dispatch({ type: START_FETCHING });

   axiosWithAuth()
    .post("/auth/receipts/add", newReceipt)
    .then(res => dispatch({ type: ADD_RECEIPT, payload: {...newReceipt, id: res.data.receiptID}}))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))
}

export const deleteReceipt = () => dispatch => {
    dispatch({ type: DELETE_RECEIPT });
}

export const logUser = credentials => dispatch => {
    console.log('credentials',credentials)
    dispatch({ type: LOGIN, payload: credentials.username})
}