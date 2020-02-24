import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row
} from "reactstrap";

import { addReceipt } from "../actions";

const AddReceipt = props => {
  console.log("props", props);
  const [newReceipt, setNewReceipt] = useState({});
  console.log(newReceipt);
  const addNew = e => {
    e.preventDefault();
    props.addReceipt(newReceipt);
    props.history.push("/receipts");
  };
  const handleChange = e => {
    setNewReceipt({
      date_of_transaction: "",
      amount_spent: "",
      category: "",
      merchant: "",
      image_url: "",
      user_username: props.user,
      description: "",
      ...newReceipt,
      [e.target.name]: e.target.value
    });
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
              value={props.date_of_transaction}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="merchant" sm={2}>
              Merchant
            </Label>
            <Input
              type="text"
              name="merchant"
              value={newReceipt.merchant}
              onChange={handleChange}
            />
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
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="category" sm={2}>
              Category
            </Label>
            <Input
              type="text"
              name="category"
              value={newReceipt.category}
              onChange={handleChange}
            />
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
          onChange={handleChange}
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
          onChange={handleChange}
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
  console.log("add state", state);
  return {
    user: state.user,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { addReceipt })(AddReceipt);
