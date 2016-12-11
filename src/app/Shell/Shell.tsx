const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import Header from './Header';
import Menu from './Menu';
import { style, cssRule } from 'typestyle';
import { setupPage, normalize } from 'csstips';
import { VlLogoGrey } from './colors';

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
});

const shellClass = style({
  padding: '0 2rem',
  margin: 0,
  textAlign: 'left',
});

export default class Shell extends React.Component<{}, {}> {
  public render() {
    return (
      <section className={shellClass}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <Menu />
        {this.props.children}
      </section>
    );
  }
}
