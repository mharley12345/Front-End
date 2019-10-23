import React, { useEffect } from "react";
import { fetchReceipts } from "../actions";
import Receipts from "./Receipts.js";
import AddReceipt from "./AddReceipt.js";
import SearchReceipt from "./SearchReceipt.js";
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

const ReceiptList = props => {
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
      
      return (
        <section className="receipt-list">
        <SearchReceipt />
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
