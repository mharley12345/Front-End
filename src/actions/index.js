// index.js for actions
/*dependencies*/
import {axiosWithAuth} from '../utils/AxiosWithAuth'

/*consts for error catching*/

export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS_RECEIPTS = 'FETCH_SUCCESS_RECEIPTS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const ADD_RECEIPT = 'ADD_RECEIPT';
export const DELETE_RECEIPT = 'DELETE_RECEIPT';
export const LOGIN = 'LOGIN';
export const EDIT_RECEIPT = 'EDIT_RECEIPT';
export const SELECT_RECEIPT = 'SELECT_RECEIPT';
export const EDIT_RECEIPT_FAILURE = 'EDIT_RECEIPT_FAILURE'
export const fetchReceipts =
    search => dispatch => {
      dispatch({type : START_FETCHING});

      axiosWithAuth()
          .get("/auth/receipts/all")
          .then(res => dispatch(
                    {type : FETCH_SUCCESS_RECEIPTS, payload : res.data}))
          .catch(err => dispatch({type : FETCH_FAILURE, payload : err}))
    }

export const addReceipt =
    newReceipt => dispatch => {
      dispatch({type : START_FETCHING});

      axiosWithAuth()
          .post("/auth/receipts/add", newReceipt)
          .then(res => dispatch({
                  type : ADD_RECEIPT,
                  payload : {...newReceipt, id : res.data.receiptID}
                }))
          .catch(err => dispatch({type : FETCH_FAILURE, payload : err}))
    }

export const deleteReceipt =
    props => dispatch => {
      console.log("DELETE ACTION", props.id, props.history)
      axiosWithAuth()
          .delete(`/auth/receipts/${props.id}/del`)
          .then(res => {dispatch({type : DELETE_RECEIPT, payload : props},
                                 props.history.push('/home'))})
          .catch(err => dispatch({type : FETCH_FAILURE, payload : err}))
    }

export const logUser =
    props => dispatch => {
      console.log('credentials', props)
      dispatch({type : LOGIN, payload : props})
    }

export const editReceipt =
    props => dispatch => {
      console.log('EDIT REDUCER', props, dispatch)
      dispatch({type : EDIT_RECEIPT, payload : props})
      props.history.push('/home')
    }

export const selectReceipt = props => dispatch => {
  dispatch({type : START_FETCHING})
  console.log('action props', props)
  axiosWithAuth()
      .get(`/auth/receipts/${props.id}`)
      .then(res => dispatch({type : SELECT_RECEIPT, payload : res.data}))
      .then(res => props.history.push('/edit-receipt'))

      .catch(err => dispatch({type : FETCH_FAILURE, payload : err}))
}