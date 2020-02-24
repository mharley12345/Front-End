import React from "react";
import { connect } from "react-redux";
import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";

import { deleteReceipt, selectReceipt } from "../actions";

import Receipt from "./Receipt.js";

const Receipts = props => {
  console.log("check props", props);

  const handleDelete = e => {
    props.deleteReceipt(props);
    console.log("THIS IS THE HANDLEDELETE", props.id, props.history);
    props.history.push("/home");
  };

  const handleEdit = e => {
    props.selectReceipt(props);
    // props.history.push('/edit-receipt')
  };

  return (
    <div>
      <Card key={props.id}>
        <CardBody>
          <CardTitle>{props.date}</CardTitle>
          <CardSubtitle>{props.amount}</CardSubtitle>
          <CardSubtitle>{props.category}</CardSubtitle>
          <CardSubtitle>{props.merchant}</CardSubtitle>
        </CardBody>
        <div>
          <button onClick={handleEdit}>edit</button>{" "}
          <button onClick={() => handleDelete()}>delete</button>
        </div>
      </Card>
      <Receipt />
    </div>
  );
};

export default connect(null, { deleteReceipt, selectReceipt })(Receipts);
