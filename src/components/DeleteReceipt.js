import React from 'react';

const DeleteReceipt = (props) => {
    

    return (
        <div className="delete-receipt">
            <button className="delete-button" onClick={() => {props.deleteReceipt()}}>delete</button>
        </div>
    );
}

export default DeleteReceipt;