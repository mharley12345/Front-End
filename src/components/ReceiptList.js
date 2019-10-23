import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Receipts from './Receipts.js';
import Receipt from './Receipt.js';
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
                const data = response.data.filter(receipt =>
                    receipt.name.toLowerCase().includes(search.toLowerCase()))
            })
            .catch(error => {
                console.log("Receipts were not retrieved", error);
            });
    }, [search]);

    const handleChange = event => {
        setSearch(event.target.value);
    };


    return (
        <section className="receipt-list">
         <SearchReceipt handleChange = {handleChange}/>
          <div className="receipts">
            {receipts.map((receipt) => (
             <Receipts 
                key={receipt.id}
                date={receipt.date_of_transaction}
                amount={receipt.amount_spent}
                category={receipt.category}
                merchant={receipt.merchant}
             />
            ))}
            <Receipt />
            <AddReceipt />
          </div>
        </section>
    );
}

export default ReceiptList;
