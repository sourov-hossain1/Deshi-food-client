import React from 'react';
import './Login.css'
import { Button } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    return (
        <div class = 'login-form'>
            <h2>Please Login</h2>
            <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button> <br />
            <Button variant="outline-secondary"> <FaGithub/> Login with Github</Button>
        </div>
    );
};

export default Login;