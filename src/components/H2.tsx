import * as React from 'react';
import { style, media, classes } from 'typestyle';

const defaultStyle = style({
  width: '100%',
  margin: 0,
  padding: 0,
  fontWeight: 'lighter',
  textAlign: 'center',
},
  media({ type: 'print' }, { fontSize: '2.5rem' }),
  media({ minWidth: 0, maxWidth: 960 }, { fontSize: '2.9rem' }),
  media({ minWidth: 961 }, { fontSize: '4rem' })
);

export const H2 = (props: { className?: string, children?: any }) => (
  <h2 className={classes(defaultStyle, props.className)}>
    {props.children}
  </h2>
);
