const appConfig = require('../../../config/main');
import * as React from 'react';
import * as Helmet from 'react-helmet';
import { setupPage, normalize } from 'csstips';
import { style, cssRule, media } from 'typestyle';
import { VlLogoGrey } from 'app/colors';
import { Header, HEADER_HEIGHT_LG, HEADER_HEIGHT_SM } from './Header';
import { SubHeader, SUB_HEADER_HEIGHT } from './SubHeader';
import { Footer, FOOTER_HEIGHT } from './Footer';
import { SideNav } from './SideNav';

setupPage('#app');
normalize();
cssRule('html', {
  fontSize: '10px',
});
cssRule('html, button, input, optgroup, select, textarea', {
  fontFamily: '"Helvetica", sans-serif',
  fontWeight: 'lighter',
  color: VlLogoGrey.toString(),
});
cssRule('@media print', {
  $nest: {
    html: {
      color: VlLogoGrey.darken(0.2).toString(),
    },
  },
});
cssRule('@page', {
    margin: '1.5cm',
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
const mainStyle = style({ paddingBottom: '2rem' },
  media({ minWidth: 0, maxWidth: 699 }, {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_SM + SUB_HEADER_HEIGHT + FOOTER_HEIGHT}rem)`,
  }),
  media({ minWidth: 700 }, {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_LG + SUB_HEADER_HEIGHT + FOOTER_HEIGHT}rem)`,
  }),
);

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
