const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import Header from './Header';
import SubHeader from './SubHeader';
import { style, cssRule, media } from 'typestyle';
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
cssRule('a', {
  color: 'inherit',
  textDecoration: 'none',
});

const shellClass = style({
  padding: '0 2rem',
  margin: 0,
  textAlign: 'left',
}, media({maxWidth: 450}, { padding: '0 1.5rem'}),
  media({maxWidth: 430}, { padding: '0 1.0rem'}));

export default class Shell extends React.Component<{}, {}> {
  public render() {
    return (
      <section className={shellClass}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Header />
        <SubHeader />
        {this.props.children}
      </section>
    );
  }
}
