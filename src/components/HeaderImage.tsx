import * as React from 'react';
import { style, classes, media }  from 'typestyle';
import { flex, vertical, endJustified }  from 'csstips';

interface IHeaderImagesProps {
  imgUrl: string;
  imgStyle?: string;
  header: string;
  headerStyle?: string;
}

export const HeaderImage = (props: IHeaderImagesProps) => {
  const imgStyle = style(flex, vertical, endJustified, {
    backgroundImage: `url(${props.imgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '-20rem -5rem',
    height: '50vh',
  });
  const headerStyle = style({
    background: 'white',
    textAlign: 'center',
    mixBlendMode: 'screen',
    fontSize: '4rem',
    width: '100%',
    margin: 0,
    padding: '2rem',
    position: 'relative',
    top: '0.1rem',
    fontWeight: 'normal',
    textDecoration: 'underline',
  }, media({maxWidth: 355}, { fontSize: '3rem'}));
  return (
    <div className={classes(imgStyle, props.imgStyle)}>
      <h1 className={classes(headerStyle, props.headerStyle)}>{props.header}</h1>
    </div>
  );
};
