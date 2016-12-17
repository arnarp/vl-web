import * as React from 'react';
import { style, classes } from 'typestyle';

const btnStyle = style({
  borderColor: 'white',
  fontSize: '2rem',
  width: '16rem',
  height: '4rem',
});

interface IOutelineBtnProps {
  className?: string;
  children?: any;
}

export const OutlineBtn = (props: IOutelineBtnProps) => (
  <button className={classes(btnStyle, props.className)}>
    {props.children}
  </button>
);
