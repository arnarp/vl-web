import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  fontSize: '2.9rem',
  fontWeight: 'lighter',
  margin: 0,
  textAlign: 'center',
  width: '100%',
},
  media({type: 'print'}, {
    fontSize: '2.5rem',
  })
);

export const H2 = (props: {className?: string, children?: any}) => (
  <h1 className={classes(defaultStyle, props.className)}>
    {props.children}
  </h1>
);
