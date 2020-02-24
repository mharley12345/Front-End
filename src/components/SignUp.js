/*dependencies*/
import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import axios from 'axios';

const SignupForm = (props) => {
    const [credentials, setCredentials] = useState({});

    const handleChange = e => {
        setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
        });
    };
// https://api-receipt-tracker.herokuapp.com
    const signup = e => {
        e.preventDefault();
       const successKey = localStorage.getItem('successKey');
        axios
        .post('https://api-receipt-tracker.herokuapp.com/register', credentials) 
        .then(res => {
            localStorage.setItem('successKey', res.data.payload);
            props.history.push('/')
        })
        .catch(err => console.log(err.response))
    }

    return(
        localStorage.getItem('token') ? (
            <Redirect to='/' />
        ) : (
            <>
            <Form onSubmit={signup}>
                <FormGroup>
                    <Label for='username' hidden>Username</Label>
                    <Input type = 'username'
                            name = 'username'
                            placeholder = 'Username'
                            value={credentials.username}
                            onChange = {handleChange}
                            />
                </FormGroup>
                <FormGroup>
                    <Label for='email' hidden>Email</Label>
                    <Input type = 'email'
                            name = 'email'
                            placeholder = 'Email'
                            value={credentials.email}
                            onChange = {handleChange}
                            />
                </FormGroup>
                <FormGroup>
                <Label for='password' hidden>Password</Label>
                    <Input type = 'password'
                            name = 'password'
                            placeholder = 'Password'
                            value = {credentials.password}
                            onChange = {handleChange}
                            />
                </FormGroup>
           
                <FormGroup>
                <Label for='confirm_password' hidden>Confirm Password</Label>
                    <Input type = 'password'
                            name = 'confirm_password'
                            placeholder = 'Confirm Password'
                            />
                </FormGroup>
                <Button>Sign Up</Button>
                <FormText>Already a member? Click <Link to='/'>
                    here
                </Link> to log in!</FormText>
            </Form>
            </>
        )
    )

}

export default SignupForm