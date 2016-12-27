import * as React from 'react';
import { style, classes, media } from 'typestyle';
import { vertical } from 'csstips';
import { H2, P, Price } from 'components';

export const itemContainerStyle = style(vertical,
  { width: '100%' },
  media({ minWidth: 840 }, {
    width: '38rem',
  }), media({ type: 'print' }, {
    width: 'auto',
  })
);
const itemHeaderStyle = style(media({ maxWidth: 367 }, { fontSize: '2.2rem' }));
const itemIdStyle = style({
  alignSelf: 'center',
});
const paddingTop = style({ paddingTop: '1rem' });
export const priceStyle = style({ alignSelf: 'flex-end' });
const priceParagraphStyle = style(
  media({ minWidth: 840 }, { marginTop: 'auto' })
);

interface ISteikarHladbordItemProps {
  header: string;
  id: string;
  paragraphs: Array<string | string[]>;
  price: number;
}

export const SteikarHladbordItem = (props: ISteikarHladbordItemProps) => {
  const paragraphs = props.paragraphs.map((p, outerIndex) => {
    if (typeof p === 'string') {
      return <P className={paddingTop} key={outerIndex}>{p}</P>;
    } else {
      return p.map((val, innerIndex) => {
        if (innerIndex == 0) {
          return <P className={paddingTop} key={outerIndex + ' ' + innerIndex}>{val}</P>;
        } else {
          return <P key={outerIndex + ' ' + innerIndex}>{val}</P>;
        }
      });
    }
  });
  return (
    <div className={itemContainerStyle}>
      <H2 className={itemHeaderStyle}>{props.header}</H2>
      <span className={itemIdStyle}>Vörunúmer {props.id}</span>
      {paragraphs}
      <P className={classes(priceParagraphStyle, priceStyle, paddingTop)}>
        Verð á mann <Price amount={props.price} />
      </P>
    </div>
  );
};
