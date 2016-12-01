const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import Header from './Header';
import Menu from './Menu';

export default class Shell extends React.Component<{}, {}> {
  public render() {
    const s = require('./Shell.css');

    return (
      <section className={s.appContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head} />
        <Menu />
        <Header />
        {this.props.children}
      </section>
    );
  }
}
