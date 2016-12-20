import * as React from 'react';
import { style, classes } from 'typestyle';

const path = `
      M 0 0 
      L 100 100
      L 0 200`;

const defaultStyle = style({
  strokeWidth: '0.2rem',
  fill: 'none',
});

export const AngleRight = (props: {stroke: string, className?: string}) => (
  <svg className={classes(defaultStyle, props.className)} width='100' height='200'
    stroke={props.stroke} viewBox='0 0 100 200'
    xmlns='http://www.w3.org/2000/svg'>
    <path d={path} />
  </svg>
);
