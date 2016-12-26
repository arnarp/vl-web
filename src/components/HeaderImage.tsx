import * as React from 'react';
import { style, classes, media } from 'typestyle';
import { flex, vertical, endJustified } from 'csstips';
import { H1 } from 'components';

interface IHeaderImagesProps {
  imgUrl: string;
  imgStyle?: string;
  header: string;
  headerStyle?: string;
}
const headerStyle = style({
  background: 'white',
  position: 'relative',
},
  media({ type: 'screen' }, {
    fontWeight: 'normal',
    mixBlendMode: 'screen',
    top: '0.1rem',
    textDecoration: 'underline',
  }),
  media({ maxWidth: 355 }, { fontSize: '3rem' }),
);

export const HeaderImage = (props: IHeaderImagesProps) => {
  const imgStyle = style(flex, vertical, endJustified, {
    backgroundImage: `url(${props.imgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-20rem -5rem',
    width: '100%',
  }, media({ type: 'screen', minWidth: 0, maxWidth: 899 }, {
    height: '50vh',
  }), media( { type: 'screen', minWidth: 900 }, {
    height: '60rem',
    backgroundPosition: 'center',
  }));
  return (
    <div className={classes(imgStyle, props.imgStyle)}>
      <H1 className={classes(headerStyle, props.headerStyle)}>{props.header}</H1>
    </div>
  );
};
