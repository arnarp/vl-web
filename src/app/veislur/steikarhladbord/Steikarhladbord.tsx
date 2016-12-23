import * as React from 'react';
import { style } from 'typestyle';
import { vertical } from 'csstips';
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
const containerStyle = style(vertical, {});
const extraInfoStyle = style({
  padding: '1rem 4rem',
});
const priceStyle = style({
  alignSelf: 'flex-end',
  $nest: {
    span: {
      fontSize: '2.5rem',
    },
  },
});

export const Steikarhladbord = () => (
  <div className={containerStyle}>
    <HeaderImage
      header='Steikarhlaðborð'
      imgUrl='https://s3-eu-west-1.amazonaws.com/vl-web/images/steikur_pura_900.jpg'
      />
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
    <div className={style(vertical, { padding: '1rem 8rem' })}>
      <h3>Einnig er hægt að bæta við hlaðborðin</h3>
      <p className={style({ paddingTop: '1rem' })}>Humarsúpa með brauði</p>
      <p className={priceStyle}>Verð á mann <span>850 kr</span></p>
      <p className={style({ paddingTop: '1rem' })}>Desert að eigin vali af desertseðli</p>
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
      <p>
        Þjónustugjaldið stjórnast af stærð veislu og því þjónustustigi sem þarf við veisluna,
        verð á hvern þjón er 5.500 kr á klukkutíma.  Lágmarkstími fyrir þjón eru 4 tímar.
      </p>
      </div>
  </div>
);
