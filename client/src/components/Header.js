import React, { Component } from 'react'
import { Menu, Button, Dropdown } from 'semantic-ui-react'

export class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable borderless size='huge'>
        <Menu.Item>
          <img alt="logo" src='/' />
        </Menu.Item>

        <Menu.Item
             name='browse'
             active={activeItem === 'browse'}
             onClick={this.handleItemClick}>
        <Dropdown icon='bars big'>
          <Dropdown.Menu>
            <Dropdown.Item icon='edit' text='Edit Profile' />
            <Dropdown.Item icon='globe' text='Choose Language' />
            <Dropdown.Item icon='settings' text='Account Settings' />
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item>
                <Button primary>Sign up</Button>
            </Menu.Item>

            <Menu.Item>
                <Button>Log-in</Button>
            </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}