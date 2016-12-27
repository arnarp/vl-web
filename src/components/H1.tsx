import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  width: '100%',
  margin: 0,
  padding: 0,
  fontSize: '4rem',
  fontWeight: 'lighter',
  textAlign: 'center',
},
  media({type: 'print'}, {
    padding: '1rem',
    fontSize: '3rem',
  })
);

export const H1 = (props: {className?: string, children?: any}) => (
  <h1 className={classes(defaultStyle, props.className)}>
    {props.children}
  </h1>
);
