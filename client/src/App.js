import React, { useState } from 'react';
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
import NavBar from './components/NavBar/NavBar';
import MobileMenu from './components/MobileMenu/MobileMenu';


import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});


/// SET UP CLIENT ///
const client = new ApolloClient({
  link: (httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <MobileMenu isOpen={isOpen} toggle={toggle}/>
        <NavBar toggle={toggle} />
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
