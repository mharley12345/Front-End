import React from 'react';
import DeleteReceipt from './DeleteReceipt.js';


const Receipt = (props) => {
    const deleteReceipt = index => {
        const newReceipts = [...props.receipts];
        newReceipts.splice(index, 1);
        props.setReceipts(newReceipts);
    };

    return (
        <div className="receipt">
            <DeleteReceipt deleteReceipt = {deleteReceipt}/>
        </div>
    );
}

export default Receipt;