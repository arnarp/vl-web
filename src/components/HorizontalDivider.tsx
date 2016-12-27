import * as React from 'react';
import { style, classes } from 'typestyle';
import { VlLogoRed } from 'app/colors';

const dividerStyle = style({
  background: VlLogoRed.toString(),
  content: '',
  height: '0.1rem',
  width: '100%',
});

export const HorizontalDivider = (props: {className?: string}) => (
  <div className={classes(dividerStyle, props.className)} />
);
