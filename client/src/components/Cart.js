import React, { Component } from 'react'
import { Menu, Dropdown, Divider, Button } from 'semantic-ui-react'

class Cart extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu inverted>
        <Menu.Item
            position='right'
            name='cart'
            active={activeItem === 'cart'}
            onClick={this.handleItemClick}>
        <Dropdown icon='cart'direction='left'>
          <Dropdown.Menu style={{ fontSize: '1.6em' }}>
            <Dropdown.Item text='Cart' />
            <Divider />
            {/* //////////////////////////////// */}
            <Divider />
                  <Button style={{ margin: '0.5em',padding: '1em 1em' }}>
                    Checkout
                  </Button>
          </Dropdown.Menu>
        </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}

export default Cart