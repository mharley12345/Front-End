//index.js for reducers

import { START_FETCHING, FETCH_SUCCESS_RECEIPTS, FETCH_FAILURE } from '../actions'


const initialState = {
  users: [
    {
      userid: "",
      username: "",
      email: "",
      password: ""
    }
  ],
  receipts: [
    {
      receiptid: "",
      date_of_transaction: "",
      category: "",
      merchant: "",
      image_url: "",
      user_username: "",
      description: ""
    }
  ],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        
      case START_FETCHING:
        return{
          ...state,
          isLoading: true,
          error: ''
        };
      case FETCH_SUCCESS_RECEIPTS:
        return{
          ...state,
          isLoading: false,
          error:'',
          receipts: action.payload
        }  
      case FETCH_FAILURE:
        return{
          ...state,
          isLoading: false,
          error: action.payload
        }
      default: 
        return state
    }
}
