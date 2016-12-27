import * as React from 'react';
import { style, classes } from 'typestyle';
import { VlLogoRed } from 'app/colors';

const dividerStyle = style({
  background: VlLogoRed.toString(),
  content: '',
  width: '0.1rem',
});

export const VerticalDivider = (props: {className?: string}) => (
  <div className={classes(dividerStyle, props.className)} />
);
