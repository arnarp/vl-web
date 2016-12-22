import * as React from 'react';
import { Hero } from 'components';

// tslint:disable-next-line:max-line-length
const paragraph = 'Við bjóðum upp á dýrindis steikarhlaðborð, hentug við öll tilefni þar sem skal gera vel við gesti í mat og drykk';

export const SteikarhladbordHero = () => (
  <Hero linkTo='/veislur/steikarhladbord'
    imgUrl='https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg'
    header='Steikarhlaðborð'
    paragraph={paragraph}/>
);
