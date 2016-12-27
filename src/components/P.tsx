import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  maxWidth: '50rem',
  margin: 0,
  fontSize: '1.6rem',
  fontWeight: 'lighter',
},
  media({type: 'print'}, {
    fontSize: '12pt',
    fontFamily: 'Helvetica',
    maxWidth: '16cm',
  }),
  media({ minWidth: 0, maxWidth: 960 }, { fontSize: '1.6rem'}),
  media({ minWidth: 961}, { fontSize: '2rem'}),
);

export const P = (props: {className?: string, children?: any}) => (
  <p className={classes(defaultStyle, props.className)}>
    {props.children}
  </p>
);
