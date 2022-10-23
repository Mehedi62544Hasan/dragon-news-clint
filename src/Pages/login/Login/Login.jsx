 import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');
    const {signIn, setLoader} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const fromm = location.state?.from?.pathname || "/";

    const handleSubmit = (event) =>{
        event.preventDefault();

        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        
        signIn(email, password)
        .then(result =>{
          const user = result.user;
          console.log(user);
          from.reset();
          setError('')
          if(user.emailVerified){
            navigate(fromm, {replace: true})
          }
          else{
            alert('Your email is not verified')
          }
        })
        .catch(error => {
          console.error(error)
          setError(error.message)
        })
        .finally(() =>{
          setLoader(false)
        })
    }

    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    );
};

export default Login;