import * as React from 'react';
import { style } from 'typestyle';
import { VlLogoRed, VlLogoGrey } from 'app/colors';

const SUB_NAV_HEIGHT = 4;
const navListStyle = style({
  height: `${SUB_NAV_HEIGHT}rem`,
  padding: '0 1rem',
  fontSize: '1.7rem',
  fontWeight: 'lighter',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'flex-end',
  color: VlLogoGrey,
  $nest: {
    '&>*:hover': {
      textDecoration: 'underline',
    },
  },
});
export const activeLinkStyle = style({
  textDecoration: 'underline',
  color: VlLogoRed,
});
export class SubNav extends React.Component<{}, {}> {
  public render() {
    return (
      <nav className={navListStyle}>
        {this.props.children}
      </nav>
    );
  }
}
