import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Receipts from './Receipts.js';
import AddReceipt from './AddReceipt.js';
import SearchReceipt from './SearchReceipt.js';

const ReceiptList = () => {
    const [receipts, setReceipts] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        Axios 
            .get("https://api-receipt-tracker.herokuapp.com/api/auth/receipts/all")
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("Receipts were not retrieved", error);
            })
    }, []);

    return (
        <section className="receipt-list">
          <div className="receipts">
            receipts.map(receipt => (
             <Receipts 
                key={receipt.id}
                date={receipt.date_of_transaction}
                amount={receipt.amount_spent}
                category={receipt.category}
                merchant={receipt.merchant}
             />
            ))
            <AddReceipt />
            <SearchReceipt />
          </div>
        </section>
    );
}

export default ReceiptList;
