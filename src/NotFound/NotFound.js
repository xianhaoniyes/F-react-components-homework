import React from 'react';
import '../index.scss';
import Header from '../Component/Header';
import MainContent from '../Component/MainContent';

const NotFound = () => {
  return (
    <main className="Main">
      <Header content="NotFound" />
      <MainContent content="NotFoundPage" />
    </main>
  );
};

export default NotFound;
