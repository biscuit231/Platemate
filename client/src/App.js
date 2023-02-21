import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';


import { Card } from './components/Card'
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar'
import { Signup } from './components/Signup'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Signup />
      </div>
      {/* <div>
        <Searchbar />
      </div> */}
      {/* <div className='ui three stackable cards'>
        <Card />
        <Card />
        <Card />
      </div> */}
    </div>
  );
}

export default App;
