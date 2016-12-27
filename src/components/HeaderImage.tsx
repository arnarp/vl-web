import * as React from 'react';
import { style, classes, media } from 'typestyle';
import { flex, vertical, endJustified } from 'csstips';
import { H1 } from 'components';

interface IHeaderImagesProps {
  imgUrl480: string;
  imgUrl960: string;
  imgUrl1920: string;
  imgStyle?: string;
  header: string;
  headerStyle?: string;
}
const headerStyle = style({
  position: 'relative',
  padding: '2rem !important',
  background: 'white',
},
  media({ type: 'screen' }, {
    fontWeight: 'normal',
    mixBlendMode: 'screen',
    top: '0.1rem',
    textDecoration: 'underline',
  }),
  media({ maxWidth: 355 }, { fontSize: '3rem !important' }),
  media({ minWidth: 720 }, { fontSize: '6rem !important' }),
);
const baseImgStyle = style(
  flex, vertical, endJustified,
  { backgroundRepeat: 'no-repeat', width: '100%' },
  media({ type: 'screen', minWidth: 0, maxWidth: 480 }, { height: '50vh', maxHeight: '48rem' }),
  media({ type: 'screen', minWidth: 481, maxWidth: 960 }, { height: '50vh', maxHeight: '64rem' }),
  media({ type: 'screen', minWidth: 961 }, { height: '70vh', maxHeight: '128rem' })
);

export const HeaderImage = (props: IHeaderImagesProps) => {
  const imgStyle = style(
    media({ minWidth: 0, maxWidth: 480 }, { backgroundImage: `url(${props.imgUrl480})` }),
    media({ minWidth: 481, maxWidth: 960 }, { backgroundImage: `url(${props.imgUrl960})` }),
    media({ minWidth: 961 }, { backgroundImage: `url(${props.imgUrl1920})` }),
  );
  return (
    <div className={classes(baseImgStyle, imgStyle, props.imgStyle)}>
      <H1 className={classes(headerStyle, props.headerStyle)}>{props.header}</H1>
    </div>
  );
};
