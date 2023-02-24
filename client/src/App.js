import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import 'semantic-ui-css/semantic.min.css';
import './App.css';


// import { Header } from './components/Header'
// import { Card } from './components/Card'
// import { Cart } from './components/Cart'

import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Home  from './pages/Home'
import Checkoutpage from './pages/Checkoutpage'
import Shop from './pages/Shop'

// import { Success } from './pages/Success'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
	return (
    <ApolloProvider client={client}>
    <Router>
        <Routes>
          <Route 
            path='/' 
            element={<Home />} 
          />
          <Route 
            path='/login' 
            element={<Loginpage />} 
          />
          <Route 
            path='/signup' 
            element={<Signuppage />} 
          />
          <Route 
            path='/checkout'
            element={<Checkoutpage />} 
          />
        </Routes>
    </Router>
    </ApolloProvider>
  );
};

export default App;
