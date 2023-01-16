import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


/// IMPORT PAGES ///
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login';

/// IMPORT COMPONENTS ///

import './reset.css';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});


/// SET UP CLIENT ///
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
