import * as React from 'react';
import { style, media } from 'typestyle';
import { vertical, center } from 'csstips';
import { HeaderImage, HorizontalDivider } from 'components';
import { SteikarHladbordItem } from './SteikarHladbordItem';

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
const extraInfoStyle = style({
  paddingTop: '1rem',
  paddingBottom: '2rem',
  maxWidth: '80vw',
  alignSelf: 'center',
});
const priceStyle = style({
  alignSelf: 'flex-end',
  $nest: {
    span: {
      fontSize: '2.5rem',
    },
  },
});
const paddingTopSm = style({ paddingTop: '1rem' });
const imgStyle = style(media({minWidth: 695}, {
  backgroundPosition: '0rem -5rem !important',
}));
const addonsStyle = style(vertical,
  media({ minWidth: 0, maxWidth: 619 }, {
    padding: '1rem 6rem',
  }), media({ minWidth: 620 }, {
    padding: '1rem 0rem',
    width: '50rem',
  })
);
export const Steikarhladbord = () => (
  <div className={containerStyle}>
    <HeaderImage
      header='Steikarhlaðborð'
      imgUrl='https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg'
      imgStyle={imgStyle}/>
    <SteikarHladbordItem
      header='Steikarhlaðborð 1'
      id='52100'
      paragraphs={steak1Paragraphs}
      price={5178}/>
    <HorizontalDivider />
    <SteikarHladbordItem
      header='Steikarhlaðborð 2'
      id='52120'
      paragraphs={steak2Paragraphs}
      price={6283}/>
    <HorizontalDivider />
    <div className={addonsStyle}>
      <h3>Einnig er hægt að bæta við hlaðborðin</h3>
      <p className={style({ paddingTop: '1rem' })}>Humarsúpa með brauði</p>
      <p className={priceStyle}>Verð á mann <span>850 kr</span></p>
      <p className={paddingTopSm}>Desert að eigin vali af desertseðli</p>
      <p className={priceStyle}>Verð á mann <span>800 kr</span></p>
    </div>
    <HorizontalDivider />
    <div className={extraInfoStyle}>
      <p>
        Fari fjöldi yfir 50 manns, vinsamlegast leitið þá eftir tilboði
      </p>
      <h3 className={style({marginTop: '2rem', marginBottom: '1rem'})}>
        Veisla haldin í veislusal okkar
      </h3>
      <p>
        Leiga á salnum er kr 80.000,
        innifalið í þessu verði er uppsetning á salnum, dúkar á borð,
        borðbúnaður og þrif, þjónusta er ekki innifalinn.
      </p>
      <p className={paddingTopSm}>
        Þjónustugjaldið stjórnast af stærð veislu og því þjónustustigi sem þarf við veisluna,
        verð á hvern þjón er 5.500 kr á klukkutíma.  Lágmarkstími fyrir þjón eru 4 tímar.
      </p>
      </div>
  </div>
);
