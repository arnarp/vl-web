import * as React from 'react';
import { Link } from 'react-router';
const s = require('./Menu.css');

export default () => (
  <nav className={s.nav}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="counter">Counter</Link></li>
      <li><Link to="stars">Stars</Link></li>
    </ul>
  </nav>
);
