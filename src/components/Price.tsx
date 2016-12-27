import * as React from 'react';
import { style, media }  from 'typestyle';

export const s = style(
  media({minWidth: 0, maxWidth: 960}, { fontSize: '2.5rem' }),
  media({minWidth: 961}, { fontSize: '3rem' }),
  media({ type: 'print' }, { fontSize: '2rem' })
);

export const Price = (props: {amount: number}) => <span className={s}>{props.amount} kr</span>;
