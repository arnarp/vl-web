import * as React from 'react';
import { style, classes, media } from 'typestyle';
import { vertical } from 'csstips';
import { H2 } from 'components';

const itemContainerStyle = style(vertical,
  media({ minWidth: 0, maxWidth: 619 }, {
    padding: '1rem 6rem',
  }), media({ minWidth: 620 }, {
    padding: '1rem 0rem',
    width: '50rem',
  })
);
const itemHeaderStyle = style(media({ maxWidth: 367 }, { fontSize: '2.2rem' }));
const itemIdStyle = style({
  alignSelf: 'center',
});
const paddingTop = style({ paddingTop: '1rem' });
const priceStyle = style({
  alignSelf: 'flex-end',
  $nest: {
    span: {
      fontSize: '2.5rem',
    },
  },
});

interface ISteikarHladbordItemProps {
  header: string;
  id: string;
  paragraphs: Array<string |  string[]>;
  price: number;
}

export const SteikarHladbordItem = (props: ISteikarHladbordItemProps) => {
  const paragraphs = props.paragraphs.map((p, outerIndex) => {
    if (typeof p === 'string') {
      return <p className={paddingTop} key={outerIndex}>{p}</p>;
    } else {
      return p.map((val, innerIndex) => {
        if (innerIndex == 0) {
          return <p className={paddingTop} key={outerIndex + ' ' + innerIndex}>{val}</p>;
        } else {
          return <p key={outerIndex + ' ' + innerIndex}>{val}</p>;
        }
      });
    }
  });
  return (
    <div className={itemContainerStyle}>
      <H2 className={itemHeaderStyle}>{props.header}</H2>
      <span className={itemIdStyle}>Vörunúmer {props.id}</span>
      {paragraphs}
      <p className={classes(priceStyle, paddingTop)}>Verð á mann <span>{props.price} kr</span></p>
    </div>
  );
};