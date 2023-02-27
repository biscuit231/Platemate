import React from 'react';
// import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react'

// require('dotenv').config()

export const Searchbar = () => {
  function onChange(props) {
    console.log(props);
  }

  return (
    <div>
  {/* <div style={{color: 'black'}} onClick={onChange}>
    <GooglePlacesAutocomplete
      // apiKey={process.env.API_KEY}
      apiKey=""
    />
  </div> */}
  <Link to="/shop">
  <Button  primary style={{ margin: '0.7em 0 0 0' }} size='big'>
  Port Pirie
  </Button></Link>
  </div>
);
}
