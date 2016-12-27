import * as React from 'react';
import { Link } from 'react-router';
import { style, classes } from 'typestyle';
import { flex, vertical, horizontal, endJustified, center } from 'csstips';
import { VlLogoGrey } from 'app/colors';
import { AngleRight } from 'icons';
import { H1, P } from 'components';

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
  });
  const headerStyle = style({
    position: 'relative',
    top: '0.1rem',
    padding: '2rem',
    background: 'white',
    color: VlLogoGrey.toString(),
    mixBlendMode: 'screen',
    fontSize: '5rem',
    textDecoration: 'underline',
  });
  const paragraphStyle = style({
    padding: '0 2rem',
    color: VlLogoGrey.toString(),
    fontSize: '1.6rem',
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
        <H1 className={headerStyle}>{props.header}</H1>
      </div>
      <P className={paragraphStyle}>{props.paragraph}</P>
      <P className={classes(nanarPStyle, paragraphStyle)}>
        Skoða nánar <AngleRight stroke={VlLogoGrey.toString()} className={iconStyle} />
      </P>
    </Link>
  );
};
