import React from 'react';
import { Link } from 'gatsby';
import './layout.css';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://jamstack-intro-auth.netlify.com">
    <header>
      <Link to="/">JAMstack APP</Link>
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
