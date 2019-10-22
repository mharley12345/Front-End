import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import Receipts from './Receipts.js';
import AddReceipt from './AddReceipt.js';
import SearchReceipt from './SearchReceipt.js';

const ReceiptList = props => {
    const [receipts, setReceipts] = useState([]);
    const [search, setSearch] = useState("");

    const fetchData = async () => {
        await axiosWithAuth() 
        .get("/auth/receipts/all")
        .then(response => {
            setReceipts(response.data);
        })
        .catch(error => {
            console.log("Receipts were not retrieved", error);
        })
    }
    
    useEffect(() => {
       fetchData();
    }, []);
    return (
        <section className="receipt-list">
          <div className="receipts">
          {receipts.map(receipt => (
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
}

export default ReceiptList;