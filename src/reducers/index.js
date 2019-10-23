//index.js for reducers


import { START_FETCHING, FETCH_SUCCESS_RECEIPTS, FETCH_FAILURE, ADD_RECEIPT, DELETE_RECEIPT } from '../actions'


const initialState = {
  user: 

    {
      userid: "",
      username: "",
      email: "",
      password: ""
    }

  ,

  receipts: [
    {
      receiptid: "",
      date_of_transaction: "",
      category: "",
      merchant: "",
      image_url: "",
      user_username: "",

      description: "",
      amount_spent:""

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

      case ADD_RECEIPT:
        return{
          ...state,
          receipts:[
            ...state.receipts, {
              ...action.payload,
              id: Date.now(),
              user_username: state.user.username
            }
          ]
        }
      case DELETE_RECEIPT:
        return{
          ...state,
          receipts:[
            ...action.payload
          ]
        }

      default: 
        return state
    }
}
