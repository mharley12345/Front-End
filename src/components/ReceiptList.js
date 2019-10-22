import React, { useEffect, useState } from "react";
import { fetchReceipts } from "../actions";
import Receipts from "./Receipts.js";
import AddReceipt from "./AddReceipt.js";
import SearchReceipt from "./SearchReceipt.js";
import { connect } from 'react-redux';

const ReceiptList = props => {
  useEffect(() => {
    props.fetchReceipts();
  }, []);

    if(props.isLoading){
        //spinner
        return(
        <p>Loading...</p>
        )
    }

  return (
    <section className="receipt-list">
      <div className="receipts">
        {props.receipts.map(receipt => (
          <Receipts
            key={receipt.id}
            date={receipt.date_of_transaction}
            amount={receipt.amount_spent}
            category={receipt.category}
            merchant={receipt.merchant}
          />
        ))}
        <AddReceipt />
        <SearchReceipt />
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
