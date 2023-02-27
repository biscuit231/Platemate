import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
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

import Shop from './pages/Shop'
import Signuppage from './pages/Signuppage'
import Loginpage from './pages/Loginpage'
import Home  from './pages/Home'
import Checkoutpage from './pages/Checkoutpage'
import Success from './pages/Success'
import Mcdonalds from './pages/Mcdonalds'


const stripePromise = loadStripe("pk_test_51MdW8iGLek4VvT99uun7zLuoHGZacReZrs0gyOfY31UrfO0aR7LMcNfV1WmhuewQ86GnxFGRrXhqcfqqn6HsVG7t004EpPPIbv");


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
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

	return (
    <ApolloProvider client={client} className="App">
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
            path='/shop' 
            element={<Shop />} 
          />
          <Route 
            path='/mcdonalds' 
            element={<Mcdonalds />} 
          />
          <Route 
            path='/success' 
            element={<Success />} 
          />
          <Route 
            path='/checkout'
            element={clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <Checkoutpage />
              </Elements>
            )} 
          />
        </Routes>
    </Router>
    </ApolloProvider>
  );
};

export default App;
