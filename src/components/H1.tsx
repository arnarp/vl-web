import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  fontSize: '4rem',
  fontWeight: 'lighter',
  margin: 0,
  textAlign: 'center',
  width: '100%',
  padding: '2rem',
},
  media({type: 'print'}, {
    fontSize: '3rem',
    padding: '1rem',
  })
);

export const H1 = (props: {className?: string, children?: any}) => (
  <h1 className={classes(defaultStyle, props.className)}>
    {props.children}
  </h1>
);
