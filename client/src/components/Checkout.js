import React from "react";
import { Button, Form, Grid, Message, Segment, Image, Divider } from 'semantic-ui-react'

export const Checkout = () => {
    return (
        <Segment>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
          </Grid.Column>
          <Grid.Column>
            <p>
              <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
            </p>
          </Grid.Column>
        </Grid>
    
        <Divider vertical></Divider>
      </Segment>
)
}