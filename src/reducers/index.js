//index.js for reducers
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
        default: 
        return state
    }
}
