import * as React from 'react';
import { Link } from 'react-router';
import { style } from 'typestyle';
import { hideAt } from 'utils/style';

const navListStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: '1.5rem',
  fontWeight: 'lighter',
  height: '3rem',
  $nest: {
    '&>*:hover': {
      textDecoration: 'underline',
    },
  },
});

export default () => (
  <nav className={navListStyle}>
    <Link to="veislumatur">Veislumatur</Link>
    <Link to="smurbraud" className={hideAt(380)}>Smurbraud</Link>
    <Link to="tertur">Tertur</Link>
    <Link to="smarettir">Smáréttir</Link>
    <Link to="veislusalur" className={hideAt(460)}>Salur</Link>
    <Link to="motuneyti">Mötuneyti</Link>
  </nav>
);
