import { Toast } from 'bootstrap';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accept, setAccept] = useState(false);
  const { createUser, updateUserProfile, handleVerify } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()

    const from = event.target;
    const name = from.name.value;
    const photoURL = from.photo.value
    const email = from.email.value;
    const password = from.password.value;
    // console.log(name, photoURL, email, password)

    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        from.reset();
        navigate('/')
        handleupdateProfile(name, photoURL);
        handleVerifEmail();
        alert('please verify')
      })
      .catch(error => console.error(error))
    }

    const handleupdateProfile = (name, photoURL) =>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() => { })
      .catch(error => console.error(error))
    }

    const handleAccept = event =>{
        setAccept(event.target.checked)
    }

    const handleVerifEmail = () =>{
      handleVerify()
      .then(() =>{})
      .catch(error=> console.error(error))
    }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Your name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control name='photo' type="text" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox" 
        onClick={handleAccept}
        label={<>Terms and <Link to='/trams'>Condetion</Link></>} />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accept}>
        Register
      </Button>

      <Form.Text className="text-danger">{error}</Form.Text>

    </Form>
  );
};

export default Register;