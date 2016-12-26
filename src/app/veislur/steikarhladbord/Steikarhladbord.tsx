import * as React from 'react';
import * as Helmet from 'react-helmet';
import { style, media } from 'typestyle';
import { horizontal, vertical, center } from 'csstips';
import { HeaderImage, HorizontalDivider, VerticalDivider, P, H3 } from 'components';
import { hideInPrint, hideAtRange }  from 'utils/style';
import {
  SteikarHladbordItem, itemContainerStyle, priceStyle, priceAmountStyle,
}  from './SteikarHladbordItem';

const steak1Paragraphs = [
  'Ylvolgt nýbakað snittubrauð, borið fram með smjöri og pestó',
  [
    'Steikt hunangsgljáð lambalæri með ferskum kryddjurtum',
    'Hunangsgljáðar kalkúnabringur',
    'Purusteik',
  ],
  // tslint:disable-next-line:max-line-length
  'Ristað ferskt grænmeti, steikar kartöflur, gratíneraðar kartöflur, ferskt salat, eplasalati, rjómasósa og sveppasósa',
];
const steak2Paragraphs = [
  `Ylvolgt nýbakað snittubrauð, borið fram með smjöri og pestó`,
  [
    'Eldsteikt nautafille með ferskum kryddjurtum',
    'Ristað kryddlegið lambalæri',
    'Smjörgljáðar kalkúnabringur',
    'Purusteik',
    'Gratíneraður skötusels Terrine',
  ],
  `Ristað ferskt grænmeti, steikar kartöflur, gratíneraðar kartöflur,
  eplasalati, rjómalöguð sveppasósa, púrtvínsbætt piparsósa.
  Salatfat með fersku grænmeti og ávöxtum`,
];

// tslint:disable:max-line-length
const containerStyle = style(vertical, center);
const paddingTopSm = style({ paddingTop: '1rem' });
const imgStyle = style(media({ minWidth: 695 }, {
  backgroundPosition: '0rem -5rem !important',
}));
const headerStyle = style(
  media({ type: 'print' }, { paddingBottom: '0 !important' })
);
const productsContainerStyle = style(
  media({type: 'screen', minWidth: 840}, horizontal, center, {
    alignItems: 'stretch',
  })
);

export const Steikarhladbord = () => (
  <div className={containerStyle}>
    <Helmet title='Steikarhlaðborð' />
    <HeaderImage
      header='Steikarhlaðborð'
      imgUrl='https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg'
      imgStyle={imgStyle}
      headerStyle={headerStyle} />
    <div className={productsContainerStyle}>
      <SteikarHladbordItem
        header='Steikarhlaðborð 1'
        id='52100'
        paragraphs={steak1Paragraphs}
        price={5178} />
      <VerticalDivider className={style(hideInPrint, hideAtRange(0, 839))} />
      <HorizontalDivider className={style(hideInPrint, hideAtRange(840))} />
      <SteikarHladbordItem
        header='Steikarhlaðborð 2'
        id='52120'
        paragraphs={steak2Paragraphs}
        price={6283} />
    </div>
    <HorizontalDivider className={style(hideInPrint)} />
    <div className={itemContainerStyle}>
      <H3>Einnig er hægt að bæta við hlaðborðin</H3>
      <P>Humarsúpa með brauði</P>
      <P className={priceStyle}>Verð á mann <span className={priceAmountStyle}>850 kr</span></P>
      <P className={paddingTopSm}>Desert að eigin vali af desertseðli</P>
      <P className={priceStyle}>Verð á mann <span className={priceAmountStyle}>800 kr</span></P>
    </div>
    <HorizontalDivider className={style(hideInPrint)} />
    <div className={itemContainerStyle}>
      <P>
        Fari fjöldi yfir 50 manns, vinsamlegast leitið þá eftir tilboði
      </P>
      <H3 className={style({ paddingTop: '2rem' })}>
        Veisla haldin í veislusal okkar
      </H3>
      <P>
        Leiga á salnum er kr 80.000,
        innifalið í þessu verði er uppsetning á salnum, dúkar á borð,
        borðbúnaður og þrif, þjónusta er ekki innifalinn.
      </P>
      <P className={paddingTopSm}>
        Þjónustugjaldið stjórnast af stærð veislu og því þjónustustigi sem þarf við veisluna,
        verð á hvern þjón er 5.500 kr á klukkutíma.  Lágmarkstími fyrir þjón eru 4 tímar.
      </P>
    </div>
  </div>
);
