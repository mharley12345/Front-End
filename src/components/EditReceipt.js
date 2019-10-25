import React, { useState } from "react";
import {Button,Col, Form, FormGroup, Label, Input, FormText, Row } from "reactstrap";
import { connect } from 'react-redux';
import { editReceipt } from "../actions";

const EditReceipt = props => {
  const [editedReceipt, setEditedReceipt] = useState(props.selectedReceipt);
  console.log('edit props', props)

  const edit = e => {
    e.preventDefault();
    editReceipt(props);
    // props.history.push('/receipts')
  };
  
  const handleChange = e => {
    setEditedReceipt({
        
        ...editedReceipt,
      [e.target.name]: e.target.value
      
    })
  };
  return (
    <Form onSubmit={edit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="date_of_transaction" sm={2}>
              Date
            </Label>
            <Input
              type="date"
              name="date_of_transaction"
              value={editedReceipt.date_of_transaction}
              onChange = {handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="merchant" sm={2}>
              Merchant
            </Label>
            <Input type="text" 
                   name="merchant"
                   value={editedReceipt.merchant}
                   onChange = {handleChange} />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="amount_spent" sm={2}>
              Amount
            </Label>
            <Input
              type="text"
              name="amount_spent"
              value={editedReceipt.amount_spent}
              placeholder="$0.00"
              onChange = {handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="category" sm={2}>
              Category
            </Label>
            <Input type="text"
                   name="category" 
                   value={editedReceipt.category}
                   onChange = {handleChange} />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
        <Label for="description" sm={2}>
          Purchase Description
        </Label>
        <Input
          type="textarea"
          name="description"
          value={editedReceipt.description}
          onChange = {handleChange}
        ></Input>
      </FormGroup>
      <FormGroup>
        <Label for="image_url" sm={2}>
          Receipt
        </Label>
        <Input
          type="file"
          name="image_url"
          value={editedReceipt.image_url}
          onChange = {handleChange}
        ></Input>
        <FormText color="muted">
          Upload an image of your receipt in .jpg format.
        </FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

const mapStateToProps = state => {
        return{
        selectedReceipt: state.selectedReceipt
        
        }
}

export default connect(mapStateToProps,{ editReceipt })(EditReceipt);
