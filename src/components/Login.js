/*dependencies*/
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { Redirect, Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, FormFeedback, FormText, Button } from 'reactstrap'

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
        axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/home')
        })
        .catch(err => console.log(err.response))
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
                            value = {credentials.password}
                            onChange = {handleChange}
                            />
                </FormGroup>
                <Button>Log In</Button>
                <FormText>Not a member? Click <Link to='/signup'>
                    here
                </Link> to sign up!</FormText>
            </Form>
            </>
        )
    )

}

export default LoginForm