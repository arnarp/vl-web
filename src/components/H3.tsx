import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  width: '100%',
  margin: 0,
  padding: 0,
  paddingBottom: '1rem',
  fontSize: '2rem',
  fontWeight: 'lighter',
  textAlign: 'center',
},
  media({type: 'print'}, {
    fontSize: '1.8rem',
  })
);

export const H3 = (props: {className?: string, children?: any}) => (
  <h3 className={classes(defaultStyle, props.className)}>
    {props.children}
  </h3>
);
