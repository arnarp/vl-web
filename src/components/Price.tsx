import * as React from 'react';
import { style, media }  from 'typestyle';

export const s = style(
  { fontSize: '2.5rem' },
  media({ type: 'print' }, { fontSize: '2rem' })
);

export const Price = (props: {amount: number}) => <span className={s}>{props.amount} kr</span>;
