
import React, { useEffect } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row
} from "reactstrap";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

const AddReceipt = props => {
  useEffect(() => {
    console.log(props);
  });

  return (
    <Form>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="date" sm={2}>
              Date
            </Label>
            <Input type="date" name="date" id="date" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="merchant" sm={2}>
              Merchant
            </Label>
            <Input type="text" name="merchant" id="merchant" />
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="amount" sm={2}>
              Amount
            </Label>
            <Input type="text" name="amount" id="amount" placeholder="$0.00" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="category" sm={2}>
              Category
            </Label>
            <Input type="select" name="category" id="category" />
          </FormGroup>
        </Col>
      </Row>
      <FormGroup>
          <Label for='description'sm={2}>Purchase Description</Label>
          <Input type='textarea' 
                 name='description'
                 id='description'>
          </Input>
      </FormGroup>
      <FormGroup>
          <Label for='imagefile'sm={2}>Receipt</Label>
          <Input type='file' 
                 name='file'
                 id='file'>
          </Input>
            <FormText color='muted'>
                Upload an image of your receipt in .jpg format.
            </FormText>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
};

export default AddReceipt;
