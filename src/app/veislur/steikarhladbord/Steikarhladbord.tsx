import * as React from 'react';
import * as Helmet from 'react-helmet';
import { style, media } from 'typestyle';
import { horizontal, vertical, center, verticallySpaced } from 'csstips';
import { HeaderImage, HorizontalDivider, VerticalDivider, P, H3, Price } from 'components';
import { hideInPrint, hideAtRange } from 'utils/style';
import {
  SteikarHladbordItem, priceStyle, itemContainerStyle,
} from './SteikarHladbordItem';

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
const containerStyle = style(vertical, center, verticallySpaced('1rem'));
const contentContainerStyle = style(
  vertical,
  verticallySpaced('1rem'),
  media({ minWidth: 0, maxWidth: 619}, { width: '100%'}),
  media({ type: 'screen', minWidth: 620, maxWidth: 839 }, { width: '50rem' }),
  media({ type: 'screen', minWidth: 840, maxWidth: 939 }, { width: '100%' }),
  media({ type: 'screen', minWidth: 940, maxWidth: 1119 }, { width: '90rem' }),
  media({ type: 'screen', minWidth: 1120 }, { width: '100rem' }),
  media({ type: 'screen', minWidth: 0, maxWidth: 374 }, { padding: '0 2rem' }),
  media({ type: 'screen', minWidth: 375, maxWidth: 619 }, { padding: '0 6rem' }),
  media({ type: 'screen', minWidth: 840, maxWidth: 939 }, { padding: '0 2rem' }),
  media({ type: 'screen', minWidth: 940 }, { padding: 0 }),
  media({ type: 'print' }, { width: 'auto', textAlign: 'justify' }),
);
const paddingTopSm = style({ paddingTop: '1rem' });
const imgStyle = style(
  media({ minWidth: 0, maxWidth: 480 }, { backgroundPosition: '0rem 0rem' }),
  media({ minWidth: 481, maxWidth: 619 }, { backgroundPosition: '-18rem 0rem' }),
  media({ minWidth: 620, maxWidth: 719 }, { backgroundPosition: '-15rem 0rem' }),
  media({ minWidth: 720, maxWidth: 819 }, { backgroundPosition: '-8rem 0rem' }),
  media({ minWidth: 820, maxWidth: 960 }, { backgroundPosition: '0rem 0rem' }),
  media({ minWidth: 961 }, { backgroundPosition: '0rem -10rem', maxHeight: '118rem !important' }),
);
const headerStyle = style(
  media({ type: 'print' }, { paddingBottom: '0 !important' })
);
const productsContainerStyle = style(
  media({ type: 'screen', minWidth: 0, maxWidth: 839 }, verticallySpaced('1rem')),
  media({ type: 'screen', minWidth: 840 }, horizontal, center, {
    alignItems: 'stretch',
    justifyContent: 'space-between',
  }),
);

export const Steikarhladbord = () => (
  <div className={containerStyle}>
    <Helmet title='Steikarhlaðborð' />
    <HeaderImage
      header='Steikarhlaðborð'
      imgUrl480='https://s3-eu-west-1.amazonaws.com/vl-web/images/_Q1A2206-480.jpg'
      imgUrl960='https://s3-eu-west-1.amazonaws.com/vl-web/images/_Q1A2206-960.jpg'
      imgUrl1920='https://s3-eu-west-1.amazonaws.com/vl-web/images/_Q1A2206-1920.jpg'
      imgStyle={imgStyle}
      headerStyle={headerStyle} />
    <div className={contentContainerStyle}>
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
        <P className={paddingTopSm}>Humarsúpa með brauði</P>
        <P className={priceStyle}>Verð á mann <Price amount={850} /></P>
        <P className={paddingTopSm}>Desert að eigin vali af desertseðli</P>
        <P className={priceStyle}>Verð á mann <Price amount={800} /></P>
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
  </div>
);
