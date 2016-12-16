import * as React from 'react';
import { style } from 'typestyle';
import { flex, vertical, endJustified, center } from 'csstips';

const sectionStyle = style(flex, vertical, endJustified, center, {
  height: 'calc(100vh - 21rem)',
  backgroundImage: `url(https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-11rem top',
  color: 'white',
  padding: '4rem 1rem',
});
const headerStyle = style({
  fontWeight: 'lighter',
  fontSize: '5rem',
  textAlign: 'center',
});

export const SteakHero = () => (
  <section className={sectionStyle}>
    <h1 className={headerStyle}>Hlaðborð</h1>
    <p>
      Við bjóðum upp á steikarhlaðborð, köld borð, kaffihlaðborð. Kíktu á úrvalið.
    </p>
    <button>Skoða nánar</button>
  </section>
);
