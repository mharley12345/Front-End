import React from 'react';
import Receipt from './Receipt.js';
import {Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
  import { deleteReceipt, selectReceipt } from '../actions'
  import { connect } from 'react-redux'

  const Receipts = props => {
  console.log('check props', props)
  
  const handleDelete = e => {
    props.deleteReceipt(props.id, props.history);
    // props.history.push('/receipts')
  }

  const handleEdit = e => {
    props.selectReceipt(props);
    // props.history.push('/edit-receipt')
  }

  return (
        <div>
         <Card key={props.id}>
           <CardBody>
             <CardTitle>{props.date}</CardTitle>
             <CardSubtitle>{props.amount}</CardSubtitle>
             <CardSubtitle>{props.category}</CardSubtitle>
             <CardSubtitle>{props.merchant}</CardSubtitle>
            </CardBody>
            <div><button onClick={handleEdit}>edit</button>  <button onClick={handleDelete}>delete</button></div>
         </Card>
            <Receipt />
        </div>
    );
}


export default connect(null,{ deleteReceipt, selectReceipt })(Receipts);