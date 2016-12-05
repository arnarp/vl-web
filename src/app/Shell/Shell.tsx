const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import Header from './Header';
import Menu from './Menu';
import { style } from 'typestyle';
import { setupPage, normalize } from 'typestyle/lib/csx';

setupPage('#app');
normalize();

const shellClass = style({
  padding: 0,
  margin: 0,
  textAlign: 'left',
});

export default class Shell extends React.Component<{}, {}> {
  public render() {
    return (
      <section className={shellClass}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Menu />
        <Header />
        {this.props.children}
      </section>
    );
  }
}
