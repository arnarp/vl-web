import * as React from 'react';
import { style } from 'typestyle';
import { flex, vertical, startJustified, center } from 'csstips';
import { OutlineBtn } from 'components/buttons';

const sectionStyle = style(flex, vertical, startJustified, center, {
  height: 'calc(100vh - 21rem)',
  backgroundImage: `url(https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-11rem top',
  color: 'white',
  padding: '4rem 1rem',
  fontSize: '2rem',
  fontFamily: 'Poppins',
  fontWeight: 'lighter',
});
const headerStyle = style({
  fontWeight: 'lighter',
  fontSize: '5rem',
  textAlign: 'center',
});
const listStyle = style({
  listStyleType: 'none',
  padding: 0,
  paddingBottom: '15rem',
  margin: 0,
  width: '100%',
  textAlign: 'center',
});

export const SteakHero = () => (
  <section className={sectionStyle}>
    <h1 className={headerStyle}>Hlaðborð</h1>
    <span>Við bjóðum upp á</span>
    <ol className={listStyle}>
      <li>steikarhlaðborð</li>
      <li>kaffihlaðborð</li>
      <li>köld borð</li>
      <li>og marg fleira</li>
    </ol>
    <OutlineBtn>Sjáðu á úrvalið</OutlineBtn>
  </section>
);
