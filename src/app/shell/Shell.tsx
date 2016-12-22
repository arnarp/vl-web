const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { setupPage, normalize } from 'csstips';
import { style, cssRule } from 'typestyle';
import { VlLogoGrey } from 'app/colors';
import { Header } from './Header';
import { SubHeader, SUB_HEADER_HEIGHT } from './SubHeader';
import { Footer, FOOTER_HEIGHT } from './Footer';
import { SideNav } from './SideNav';

setupPage('#app');
normalize();
cssRule('html', {
  fontSize: '10px',
});
cssRule('html, button, input, optgroup, select, textarea', {
  fontFamily: '"Poppins", sans-serif',
  fontWeight: 'lighter',
  color: VlLogoGrey.toString(),
});
cssRule('button', {
  cursor: 'pointer',
  background: 'transparent',
  border: `solid 0.1rem ${VlLogoGrey.toHexString()}`,
  fontSize: '1.4rem',
  color: 'inherit',
  fontWeight: 'lighter',
});
cssRule('a', {
  color: 'inherit',
  textDecoration: 'none',
});
cssRule('h1, h2', {
  fontWeight: 'lighter',
  margin: 0,
});
cssRule('p', { margin: 0, fontSize: '1.6rem', maxWidth: '50rem'});

const shellClass = style({
  margin: 0,
  textAlign: 'left',
});
const mainStyle = style({
  minHeight: `calc(100vh - ${SUB_HEADER_HEIGHT + FOOTER_HEIGHT}rem)`,
});

export class Shell extends React.Component<{}, {}> {
  public render() {
    return (
      <section className={shellClass}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <SubHeader />
        <SideNav />
        <main className={mainStyle}>
          {this.props.children}
        </main>
        <Footer />
      </section>
    );
  }
}
