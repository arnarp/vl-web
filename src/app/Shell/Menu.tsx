import * as React from 'react';
import { Link } from 'react-router';
import { style } from 'typestyle';

const navListStyle = style({
  listStyleType: 'none',
  padding: 0,
  $nest: {
    li: {
      display: 'inline',
      padding: 10,
      color: 'blue',
    },
  },
});

export default () => (
  <nav className={navListStyle}>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="about">About</Link></li>
      <li><Link to="counter">Counter</Link></li>
      <li><Link to="stars">Stars</Link></li>
    </ul>
  </nav>
);
