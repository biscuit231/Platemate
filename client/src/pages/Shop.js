import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown, 
  Image
} from 'semantic-ui-react'
import Logo from '../assets/images/restaurant.png'
import { Card } from '../components/Card'
import Cart from '../components/Cart'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})
const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Shop'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1em' : '2em',
      }}
    />
    <Container>
    </Container>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 300, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='huge'
            >
              <Container>
              <Menu.Item style={{ maxHeight: 50, padding: '1em 1em' }}>
              <Image alt="logo" src={Logo} style={{ marginLeft: '0.5em' }} size='tiny'/>
              </Menu.Item>
              <Menu.Item style={{ padding: '1.5em 1.6em', margin: '0px 0px -2px'}} ><Link to="/">Home</Link></Menu.Item>
                <Dropdown text='Menu' as='h3' style={{ maxHeight: 50, padding: '0.5em 0.5em' }}>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile' />
                    <Dropdown.Item icon='globe' text='Choose Language' />
                    <Dropdown.Item icon='settings' text='Account Settings' />
                  </Dropdown.Menu>
                </Dropdown>
                <Menu.Item position='right' >
                  <Cart/>
                    <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} onClick={logout}>
                      Logout
                    </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item as='a' active>
              Home
            </Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
          </Sidebar>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                  <Menu.Item position='right'>
                    <Button as='a' inverted>
                      Log in
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                      Sign Up
                    </Button>
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (

  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Shop = () => (
  <ResponsiveContainer>
      <Container style={{ padding: '8em 0em' }}>
      <Card />
      </Container>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>How It All Began</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Our Locations</List.Item>
                <List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Need a Job?</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Example Header
              </Header>
              <p>
                Lorem dolore consequat quis laboris.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)

export default Shop