import * as React from 'react';
import { Link } from 'react-router';
import { style, classes } from 'typestyle';
import { flex, vertical, horizontal, endJustified, center } from 'csstips';
import { VlLogoGrey } from 'app/colors';
import { AngleRight } from 'icons';

interface IHeroProps {
  linkTo: string;
  imgUrl: string;
  header: string;
  paragraph: string;
  backroundPosition?: string;
}
export const Hero = (props: IHeroProps) => {
  const linkStyle = style(flex, vertical, center, {
  });
  const imgStyle = style(flex, vertical, endJustified, center, {
    height: 'calc(100vh - 23rem)',
    maxHeight: '50rem',
    width: '100%',
    backgroundImage: `url(${props.imgUrl})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: props.backroundPosition || '-15rem -5rem',
    color: 'white',
    fontFamily: 'Poppins',
    fontWeight: 'lighter',
  });
  const headerStyle = style({
    fontWeight: 'lighter',
    fontSize: '5rem',
    textAlign: 'center',
    background: 'white',
    color: VlLogoGrey.toString(),
    mixBlendMode: 'screen',
    position: 'relative',
    margin: 0,
    top: '0.1rem',
    textDecoration: 'underline',
    width: '100%',
    padding: '2rem',
  });
  const paragraphStyle = style({
    color: VlLogoGrey.toString(),
    fontSize: '1.6rem',
    padding: '0 2rem',
  });
  const iconStyle = style({
    height: '5rem',
    strokeWidth: '1rem',
  });
  const nanarPStyle = style(flex, horizontal, endJustified, center, {
    padding: '2rem',
  });
  return (
    <Link className={linkStyle} to={props.linkTo}>
      <div className={imgStyle}>
        <h1 className={headerStyle}>{props.header}</h1>
      </div>
      <p className={paragraphStyle}>{props.paragraph}</p>
      <p className={classes(nanarPStyle, paragraphStyle)}>
        Skoða nánar <AngleRight stroke={VlLogoGrey.toString()} className={iconStyle} />
      </p>
    </Link>
  );
};
