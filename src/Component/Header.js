import React from 'react';
import '../index.scss';

const Header = (props) => (
  <header className="Header">
    <h1>{props.content}</h1>
  </header>
);

export default Header;
