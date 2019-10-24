import React, { useEffect, useState } from "react";
import {Button,Col, Form, FormGroup, Label, Input, FormText, Row } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { editReceipt } from "../actions";
import { statement } from "../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/@types/babel__template";

const EditReceipt = props => {
  const [editedReceipt, setEditedReceipt] = useState({});

  const edit = e => {
    e.preventDefault();
    editReceipt(editedReceipt);
    props.history.push('/receipts')
  };
  const handleChange = e => {
    setEditedReceipt({
        
        ...newReceipt,
      [e.target.name]: e.target.value
      
    })
  };
  return (
    <Form onSubmit={addNew}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="date_of_transaction" sm={2}>
              Date
            </Label>
            <Input
              type="date"
              name="date_of_transaction"
              value={newReceipt.date_of_transaction}
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
                   value={newReceipt.merchant}
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
              value={newReceipt.amount_spent}
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
                   value={newReceipt.category}
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
          value={newReceipt.description}
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
          value={newReceipt.image_url}
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
        user: state.user,
        receipts: 
        }
}

export default connect(null,{ addReceipt })(AddReceipt);
