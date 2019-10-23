
import React, { useEffect, useState } from "react";

import { fetchReceipts } from "../actions";
import Receipts from "./Receipts.js";
import AddReceipt from "./AddReceipt.js";
import SearchReceipt from "./SearchReceipt.js";
import { connect } from 'react-redux';

import { Spinner } from 'reactstrap';

const ReceiptList = props => {
  const [search, setSearch] = useState('');
  
  

  useEffect(() => {
    props.fetchReceipts();
  }, []);

    if(props.isLoading){
        //spinner
        return(

          <div>
          <Spinner color='primary' style={{ width: '3rem', height: '3rem' }}/>
          <br/>
          Loading...</div>
        )
      }
      
      const handleChange = event => {
        setSearch(event.target.value)
      }

      return (
        <section className="receipt-list">
        <SearchReceipt handleChange={handleChange}/>
      <div className="receipts">
        {props.receipts.filter(receipt =>
        receipt.merchant.toLowerCase().includes(search.toLowerCase())
        || receipt.amount_spent.toString().toLowerCase().includes(search.toLowerCase())
        || receipt.category.toLowerCase().includes(search.toLowerCase())
        || receipt.date_of_transaction.toString().toLowerCase().includes(search.toLowerCase())
        || receipt.description.toLowerCase().includes(search.toLowerCase())

        ).map(receipt => (

          <Receipts
            key={receipt.id}
            date={receipt.date_of_transaction}
            amount={receipt.amount_spent}
            category={receipt.category}
            merchant={receipt.merchant}
          />
        ))}

      </div>
    </section>
  );
};

const mapStateToProps = state => {
    return {
        receipts: state.receipts,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapStateToProps,{fetchReceipts})(ReceiptList);
