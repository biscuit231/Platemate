import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
// require('dotenv').config()

export const Searchbar = () => {
  function onChange(props) {
    console.log(props);
  }

  return (
  <div style={{color: 'black'}} onClick={onChange}>
    <GooglePlacesAutocomplete
      // apiKey={process.env.API_KEY}
      apiKey="AIzaSyCn-sq0MPQg8YPo9YK0L-Dxq-yOlFVtBOA"
    />
  </div>
);
}
