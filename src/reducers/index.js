


import { START_FETCHING, FETCH_SUCCESS_RECEIPTS, FETCH_FAILURE, ADD_RECEIPT, DELETE_RECEIPT, LOGIN, SELECT_RECEIPT ,EDIT_RECEIPT} from '../actions'


const initialState = {
  user: "",


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
  selectedReceipt:{
    receiptid: "",
      date_of_transaction: "",
      category: "",
      merchant: "",
      image_url: "",
      user_username: "",
      description: "",
      amount_spent:""
  },
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type){

      case LOGIN:
        console.log(action)
        console.log('state', state)  
      return{
          ...state,
          user: action.payload,
          isLoading: false,
          error: ""

          

        }
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
          receipts: action.payload,
          user:state.user
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
          isLoading: false,
          receipts:[
            ...state.receipts, {
              ...action.payload,
            }
          ],
          user:state.user,
          error: ''
        }
      case DELETE_RECEIPT:
        return{
          ...state,
          receipts:[
            ...action.payload
          ]
        }
      case SELECT_RECEIPT:
        return{
          ...state,
          selectedReceipt: action.payload,
          isLoading: false,
          
        }
        case EDIT_RECEIPT:
          return{
            ...state,
            selectedReceipt:action.SELECT_RECEIPT.receiptid,
            isLoading:false,
          }
      default: 

        return state
    }
}
