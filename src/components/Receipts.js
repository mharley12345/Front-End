import React from 'react';
import Receipt from './Receipt.js';
import {
    Card, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const Receipts = (props) => {
    return (
        <div>
         <Card key={props.id}>
           <CardBody>
             <CardTitle>{props.date}</CardTitle>
             <CardSubtitle>{props.amount}</CardSubtitle>
             <CardSubtitle>{props.category}</CardSubtitle>
             <CardSubtitle>{props.merchant}</CardSubtitle>
            </CardBody>
         </Card>
            <Receipt />
        </div>
    );
}

export default Receipts;