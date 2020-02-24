import React, {useState} from "react";
import {connect} from 'react-redux';
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

import {editReceipt, selectReceipt} from "../actions";
import {axiosWithAuth} from "../utils/AxiosWithAuth";

const EditReceipt = props => {

   console.log("PROPS",props)
  const [editedReceipt, setEditedReceipt] = useState(props.selectedReceipt);
 

  const edit = e => {
    e.preventDefault(); 
    e.stopPropagation();
  
    axiosWithAuth()
    .put(`/auth/receipts/${editedReceipt.id}/edit`,editedReceipt)
    .then(props.editReceipt(props))
    .then(res => {
        const changes = res.data.changes
        

   
        changes.history.push('/home')
  
    })
    .catch(err => {console.log(err)})
  
 
   

 
     
  };
  
  const handleChange = e => {
  

    e.preventDefault()
    setEditedReceipt({
        ...props.selectedReceipt,
       
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
          value={''}
          onChange = {handleChange}
        ></Input>
        <FormText color="muted">
          Upload an image of your receipt in .jpg format.
        </FormText>
      </FormGroup>
      <Button type="submit" onSubmit={edit}>Submit</Button>
    </Form>
  );
};

const mapStateToProps = state => {
        return{
        selectedReceipt: state.selectedReceipt,
        receipts:[
         
          {
            receiptid:selectReceipt.id,...selectReceipt
          }
        ]
        }
}

export default connect(mapStateToProps,{ editReceipt })(EditReceipt);
