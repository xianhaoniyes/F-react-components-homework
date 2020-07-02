import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <footer>
      <nav>
        <ul className="Navbar">
          <li>
            <Link className="link" to="/chat">
              客服
            </Link>
          </li>
          <li>
            <Link className="link" to="/notfound">
              6.18活动
            </Link>
          </li>
          <li>
            <Link className="link" to="/notfound">
              关于我们
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Navbar;
