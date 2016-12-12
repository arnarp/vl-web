const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import Header from './Header';
import { SubHeader, SUB_HEADER_HEIGHT } from './SubHeader';
import { style, cssRule } from 'typestyle';
import { setupPage, normalize } from 'csstips';
import { VlLogoGrey } from './colors';
import { Footer, FOOTER_HEIGHT } from './Footer';

setupPage('#app');
normalize();
cssRule('html', {
  fontSize: '10px',
});
cssRule('html, button, input, optgroup, select, textarea', {
  fontFamily: '"Poppins", sans-serif',
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

const shellClass = style({
  margin: 0,
  textAlign: 'left',
});
const mainStyle = style({
  minHeight: `calc(100vh - ${SUB_HEADER_HEIGHT + FOOTER_HEIGHT}rem)`,
});

export default class Shell extends React.Component<{}, {}> {
  public render() {
    return (
      <section className={shellClass}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <SubHeader />
        <main className={mainStyle}>
          {this.props.children}
        </main>
        <Footer />
      </section>
    );
  }
}
