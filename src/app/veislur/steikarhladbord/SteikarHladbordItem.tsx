import * as React from 'react';
import { style, classes } from 'typestyle';
import { vertical } from 'csstips';

const itemContainerStyle = style(vertical, {
  padding: '1rem 8rem',
});
const itemHeaderStyle = style({
  fontSize: '2.9rem',
  fontWeight: 'lighter',
  textAlign: 'center',
});
const itemIdStyle = style({
  alignSelf: 'center',
});
const paddingTop = style({ paddingTop: '1rem' });
const priceStyle = style({
  alignSelf: 'flex-end',
  $nest: {
    span: {
      fontSize: '3rem',
    },
  },
});

interface ISteikarHladbordItemProps {
  header: string;
  id: string;
  paragraphs: string[];
  price: number;
}

export const SteikarHladbordItem = (props: ISteikarHladbordItemProps) => (
  <div className={itemContainerStyle}>
    <h2 className={itemHeaderStyle}>{props.header}</h2>
    <span className={itemIdStyle}>Vörunúmer {props.id}</span>
    {props.paragraphs.map(p => <p className={paddingTop}>{p}</p>)}
    <p className={classes(priceStyle, paddingTop)}>Verð á mann <span>{props.price} kr</span></p>
  </div>
);
