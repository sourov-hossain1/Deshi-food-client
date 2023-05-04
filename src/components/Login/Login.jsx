import React, { useContext } from 'react';
import './Login.css'
import { Button, Container, Form } from 'react-bootstrap';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const {signIn} = useContext(AuthContext);

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result =>{
            const signInUser = result.user;
            console.log(signInUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }

    return (
        <Container className='mx-auto w-25'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                   Login
                </Button> <br />
                <Form.Text>
                    Don't have an account ? <Link to="/register">Register</Link>
                </Form.Text>
            </Form>
            <div className='mt-4'>
                <Button variant="outline-primary"> <FaGoogle /> Login with Google</Button> <br />
                <Button variant="outline-secondary" className='mt-2'> <FaGithub /> Login with Github</Button>
            </div>
        </Container>
    );
};

export default Login;