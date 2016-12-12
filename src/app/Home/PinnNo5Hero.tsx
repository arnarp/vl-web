import * as React from 'react';
import { style } from 'typestyle';

const divStyle = style({
  height: 'calc(100vh - 21rem)',
  backgroundImage: `url(${require('app/assets/pinn_no_5.jpg')})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '-11rem top',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
});
const pStyle = style({
  paddingTop: '15vh',
  paddingBottom: '2rem',
  fontSize: '3.2rem',
  margin: 0,
});
const btnStyle = style({
  borderColor: 'white',
  fontSize: '2rem',
  width: '16rem',
  height: '4rem',
});

export default () => (
  <div className={divStyle}>
    <p className={pStyle}>Pinnaborð</p>
    <button className={btnStyle}>Sjá nánar</button>
  </div>
);
