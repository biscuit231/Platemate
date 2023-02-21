import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'semantic-ui-react'

export class Signup extends Component {
  state = { submittedName: '', submittedEmail: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleSubmit = () => {
    const { FirstName, LastName } = this.state

    this.setState({ submittedName: FirstName, submittedEmail: LastName })
  }

  render() {

    return (
      <div>
        <Form onSubmit={this.handleSubmit} widths='equal'>
            <Form.Group>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                name='FirstName'
                label='First name'
                placeholder='First name'
            />
            <Form.Field
                id='form-input-control-last-name'
                control={Input}
                name='LastName'
                label='Last name'
                placeholder='Last name'
            />
            </Form.Group>
            <Form.Group>
                <Form.Field>
                    <label>Phone Number</label>
                    <Input placeholder='Phone Number' />
                </Form.Field>
            </Form.Group>
            <Form.Field
            id='form-input-control-error-email'
            control={Input}
            label='Email'
            placeholder='joe@schmoe.com'
            // error={{
            //     content: 'Please enter a valid email address',
            //     pointing: 'below',
            // }}
            />
            <Form.Field
                id='form-input-control-password'
                control={Input}
                name='Password'
                label='Password'
                placeholder='Password'
            />
            <Form.Field
                control={Checkbox}
                label='I agree to the Terms and Conditions'
            />
            <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Submit'
            />
        </Form>
      </div>
    )
  }
}
