import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/restaurant.png'
import { Button, Form, Grid, Header, Image, Message, Segment, Input } from 'semantic-ui-react'

import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN);
  
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
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      setFormState({
        email: '',
        password: '',
      });
    };

 return (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Link to='/'><Image src={Logo} alt='logo' style={{ maxWidth: '2em', maxheight: '5em', }} verticalAlign='middle'/> </Link> Log-in to your account
      </Header>
      <Form size='large' onSubmit={handleFormSubmit}>
      <Segment stacked>
            <Form.Input 
            fluid 
            icon='user' 
            iconPosition='left' 
            id='form-input-control-email'
            control={Input}
            name='email'
            label='Email'
            placeholder='joe@schmoe.com'
            onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              type='password'
              id='form-input-control-password'
              control={Input}
              name='password'
              label='Password'
              placeholder='Password'
              onChange={handleChange}
            />
  
            <Button 
            id='form-button-control-public'
            color='teal' 
            fluid 
            size='large'>
              Login
            </Button>
          </Segment>
      </Form>
      <Message>
        Don't have an account? <Link to="/signup"> Sign up</Link>
      </Message>
    </Grid.Column>
  </Grid>
 )
}

export default Login