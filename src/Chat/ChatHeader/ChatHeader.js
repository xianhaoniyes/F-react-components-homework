import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index.scss';
import './ChatHeader.scss';

class ChatHeader extends Component {
  render() {
    const { shop } = this.props;
    const logoStyle = {
      backgroundImage: `url(${shop.logo})`,
    };
    return (
      <header className="ChatHeader">
        <Link className="ChatbackLink" to="/">
          {' '}
          back{' '}
        </Link>
        <div className="logo" style={logoStyle} />
        <h1>{shop.name}</h1>
      </header>
    );
  }
}

export default ChatHeader;
