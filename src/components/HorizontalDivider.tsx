import * as React from 'react';
import { style } from 'typestyle';
import { VlLogoRed } from 'app/colors';

const dividerStyle = style({
  background: VlLogoRed.toString(),
  content: '',
  height: '0.1rem',
  margin: '1rem auto',
  width: '80%',
});

export const HorizontalDivider = () => <div className={dividerStyle} />;
