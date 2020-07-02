import React from 'react';
import { Link } from 'react-router-dom';
import './MainContent.scss';
import shopData from '../data/shop.json';

const MainContent = (props) => {
  let content = null;
  if (props.content === 'WelcomePage') {
    const logoStyle = {
      backgroundImage: `url(${shopData.logo})`,
    };
    content = (
      <section className="MainContent">
        <div className="MainLogo" style={logoStyle} />
        <h1>{shopData.name}</h1>
      </section>
    );
  } else {
    content = (
      <section className="MainContent">
        <header>Coming Soon...</header>
        <Link className="link" to="/">
          Back to Home
        </Link>
      </section>
    );
  }
  return content;
};

export default MainContent;
