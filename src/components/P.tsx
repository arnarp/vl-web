import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  maxWidth: '50rem',
  margin: 0,
  fontSize: '1.6rem',
  fontWeight: 'lighter',
},
  media({type: 'print'}, {
    fontSize: '1.4rem',
  })
);

export const P = (props: {className?: string, children?: any}) => (
  <p className={classes(defaultStyle, props.className)}>
    {props.children}
  </p>
);
