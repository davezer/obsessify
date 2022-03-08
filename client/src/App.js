import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
// import Navigation from './components/Nav/index.js';
import Header from './components/Header/';

// import library here
import './assets/libraries/bootstrap.css';

//import app.css
import './App.css'

import Footer from './components/Footer/index';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:3000/graphql',
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
        <>
          <div>
            <Header />
          </div>
          <div>
            <Footer />
          </div>
          
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;