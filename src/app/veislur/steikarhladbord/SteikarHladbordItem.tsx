import * as React from 'react';
import { style, classes, media } from 'typestyle';
import { vertical } from 'csstips';
import { H2, P }  from 'components';

export const itemContainerStyle = style(vertical,
  media({ minWidth: 0, maxWidth: 619 }, {
    width: '100%',
    padding: '1rem 6rem',
  }), media({ minWidth: 620, maxWidth: 839 }, {
    width: '50rem',
    padding: '1rem 0rem',
  }), media({ minWidth: 840}, {
    width: '38rem',
    padding: '1rem 0rem',
  }), media({ type: 'print'}, {
    width: 'auto',
    textAlign: 'justify',
  })
);
const itemHeaderStyle = style(media({ maxWidth: 367 }, { fontSize: '2.2rem' }));
const itemIdStyle = style({
  alignSelf: 'center',
});
const paddingTop = style({ paddingTop: '1rem' });
export const priceStyle = style({ alignSelf: 'flex-end' });
export const priceAmountStyle = style({
  fontSize: '2.5rem',
}, media({ type: 'print' }, { fontSize: '2rem' }));
const priceParagraphStyle = style(
  media({minWidth: 840}, { })
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
        Verð á mann <span className={priceAmountStyle}>{props.price} kr</span>
      </P>
    </div>
  );
};
