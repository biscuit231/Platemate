import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Grid, Message } from 'semantic-ui-react'

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };


    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
        <Form onSubmit={handleFormSubmit} widths='equal' size='large'>
            <Form.Group>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                name='firstName'
                label='First name'
                placeholder='First name'
                onChange={handleChange}
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                name='lastName'
                label='Last name'
                placeholder='Last name'
                onChange={handleChange}
            />
            </Form.Group>
            <Form.Group>
                <Form.Field 
                id='form-input-control-phone-number'
                control={Input}
                name='phoneNumber'
                label='Phone Number'
                placeholder='Phone Number'
                onChange={handleChange}
                />
            </Form.Group>
            <Form.Field
            id='form-input-control-email'
            control={Input}
            name='email'
            label='Email'
            placeholder='joe@schmoe.com'
            onChange={handleChange}
            />
            <Form.Field
                id='form-input-control-password'
                control={Input}
                name='password'
                label='Password'
                placeholder='Password'
                onChange={handleChange}
                type= 'password'
            />
            <Form.Field
                control={Checkbox}
                label='I agree to the Terms and Conditions'
            />
            <Message>
            Already have an account? <Link to="/login"> Login</Link>
            </Message>
            <Form.Field
            id='form-button-control-public'
            color='teal'
            control={Button}
            content='Submit'
            />
        </Form>
        </Grid.Column>
      </Grid>
    )
  }

