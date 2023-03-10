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
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
  Dropdown
} from 'semantic-ui-react'
import {Searchbar} from '../components/Searchbar'
import Cart from '../components/Cart'
import Logo from '../assets/images/restaurant.png'
import Food from '../assets/images/menulog-food-delivery-app-4.jpg'

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
      content='PlateMate'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Get your food where you want it, when you want it'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Container>
    {Auth.loggedIn() ? (
      <Searchbar />
      ) : (
        <h3>Login to search</h3>
        )}
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
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='massive'
            >
              <Container>
              {Auth.loggedIn() ? (
            <>  
                <Menu.Item style={{ maxHeight: 70, padding: '1.1em 1.6em' }}>
                <Image alt="logo" src={Logo} style={{ marginLeft: '0.5em' }} size='tiny'/>
                </Menu.Item>
                <Dropdown text='Menu' as='h3'>
                  <Dropdown.Menu>
                    <Dropdown.Item icon='edit' text='Edit Profile' />
                    <Dropdown.Item icon='globe' text='Choose Language' />
                    <Dropdown.Item icon='settings' text='Account Settings' />
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Menu.Item style={{ padding: '1.1em 1.6em', fontSize: '24px' }}>
                  Hey there, {Auth.getProfile().data.firstName}!
                  </Menu.Item> */}
                <Menu.Item position='right' >
                  <Cart/>
                    <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} onClick={logout}>
                      Logout
                    </Button>
                </Menu.Item>
            </>
          ) : (
            <>  
                <Menu.Item style={{ maxHeight: 70, padding: '1.1em 1.6em' }}>
                  <Image alt="logo" src={Logo} style={{ marginLeft: '0.5em' }} size='tiny'/>
                </Menu.Item>
                <Menu.Item style={{ padding: '1.6em 1.6em', margin: '0px 0px -2px'}} ><Link to="/">Home</Link></Menu.Item>
                <Menu.Item position='right' >
                  <Link to="/login">
                  <Button inverted={!fixed} size='huge'>
                  Log in
                  </Button>
                  </Link>
                  <Link to="/signup">
                  <Button inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }} size='huge'>
                  Sign up
                  </Button></Link>
                </Menu.Item>
            </>
          )}
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
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
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

const Home = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Our Goals:
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            The goal of this app is to support the community by making it easy and convenient for people to order food from their favorite local restaurants. I believe in the importance of supporting small businesses and providing them with a platform to reach a wider audience. With this app, customers can discover new restaurants, browse menus, and place orders with just a few taps on their phone.
            </p>
            
            <p style={{ fontSize: '1.33em' }}>
            But this app isn't just about convenience and accessibility. It's also about creating a more sustainable and environmentally-friendly food delivery system. I'm committed to reducing waste and emissions by using eco-friendly packaging and partnering with restaurants that prioritize sustainability.

I'm excited to see how this app will grow and evolve, and I hope it will make a positive impact on both the local food scene and the environment. Thank you for choosing to support local businesses and join me on this journey.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={Food} />
          </Grid.Column>
        </Grid.Row>
        
      </Grid>
    </Segment>

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

export default Home