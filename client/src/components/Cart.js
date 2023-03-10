import React from 'react'
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Divider, Button } from 'semantic-ui-react'

const Cart = () => {


  function handleCheckout(e) {
    console.log(e);
  }

  return (
      <Menu inverted >
      <Menu.Item
          position='right'
          name='cart'
        
          >
      <Dropdown icon='cart big' direction='left' >
        <Dropdown.Menu style={{ fontSize: '1.6em' }}>
          <Dropdown.Item text='Cart' />
          <Divider />
          {/* //////////////////////////////// */}
          <Divider />
                <Link to="/checkout">
                  <Button primary style={{padding: '1em 1em', margin: '0.5em 0 0.5em 0' }} onClick={handleCheckout}>
                    Checkout
                  </Button>
                </Link>
        </Dropdown.Menu>
      </Dropdown>
      </Menu.Item>
    </Menu>
  )
}


export default Cart