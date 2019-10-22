//index.js for actions
/*dependencies*/
import { axiosWithAuth } from '../utils/AxiosWithAuth'

/*consts for error catching*/

export const START_FETCHING = 'START_FETCHING';export const FETCH_SUCCESS_USER = 'FETCH_SUCCESS_USER';
export const FETCH_SUCCESS_RECEIPTS = 'FETCH_SUCCESS_RECEIPTS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchReceipts = () => dispatch => {
    dispatch({ type: START_FETCHING });

    axiosWithAuth()
    .get("/auth/receipts/all")
    .then(res => dispatch({ type: FETCH_SUCCESS_RECEIPTS, payload: res.data}))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err}))

    
}

