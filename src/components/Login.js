/*dependencies*/
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { Redirect } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'react-strap'

const LoginForm = (props) => {
    const [credentials, setCredentials] = useState({});

    const handleChange = e => {
        setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
        });
    };

    const login = e => {
        e.preventDefault();
    }

    return(
        localStorage.getItem('token') ? (
            <Redirect to='/home' />
        ) : (
            <>
            <Form onSubmit={login}>
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
                <Label for='password' hidden>Password</Label>
                    <Input type = 'password'
                            name = 'password'
                            placeholder = 'Password'
                            value = {credentials.username}
                            onChange = {handleChange}
                            />
                </FormGroup>
                <Button>Log In</Button>
            </Form>
            </>
        )
    )

}

export default LoginForm