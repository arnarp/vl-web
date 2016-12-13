import * as React from 'react';
import { Link } from 'react-router';
import { style } from 'typestyle';
import { hideAt } from 'utils/style';
import { VlLogoRed, VlLogoGrey } from 'app/shell/colors';

export const SUB_HEADER_HEIGHT = 8.5;
const navListStyle = style({
  height: `${SUB_HEADER_HEIGHT}rem`,
  padding: '0 1rem',
  fontSize: '1.5rem',
  fontWeight: 'lighter',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  color: VlLogoGrey,
  $nest: {
    '&>*:hover': {
      textDecoration: 'underline',
    },
  },
});
const activeLinkStyle = style({
  textDecoration: 'underline',
  color: VlLogoRed,
  fontSize: '1.6rem',
});
export const SubHeader = () => (
  <nav className={navListStyle}>
    <Link activeClassName={activeLinkStyle} to="veislur">Veislur</Link>
    <Link activeClassName={activeLinkStyle} to="smurbraud" className={hideAt(380)}>Smurbraud</Link>
    <Link activeClassName={activeLinkStyle} to="tertur">Tertur</Link>
    <Link activeClassName={activeLinkStyle} to="smarettir">Smáréttir</Link>
    <Link activeClassName={activeLinkStyle} to="veislusalur" className={hideAt(460)}>Salur</Link>
    <Link activeClassName={activeLinkStyle} to="motuneyti">Mötuneyti</Link>
  </nav>
);
