import React from 'react';
import '../index.scss';
import Header from '../Component/Header';
import MainContent from '../Component/MainContent';
import Navbar from './Navbar';

const Welcome = () => {
  return (
    <main className="Main">
      <Header content="Welcome" />
      <MainContent content="WelcomePage" />
      <Navbar />
    </main>
  );
};

export default Welcome;
