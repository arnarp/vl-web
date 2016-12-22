import * as React from 'react';
import { style } from 'typestyle';
import { vertical } from 'csstips';
import { HeaderImage, HorizontalDivider } from 'components';
import { SteikarHladbordItem } from './SteikarHladbordItem';

const steak1Paragraphs = [
  'Ylvolgt nýbakað snittubrauð, borið fram með smjöri og pestó',
  `Steikt hunangsgljáð lambalæri með ferskum kryddjurtum
  Hunangsgljáðar kalkúnabringur
  Purusteik`,
  // tslint:disable-next-line:max-line-length
  'Ristað ferskt grænmeti, steikar kartöflur, gratíneraðar kartöflur, ferskt salat, eplasalati, rjómasósa og sveppasósa',
];
const steak2Paragraphs = [
  `Ylvolgt nýbakað snittubrauð, borið fram með smjöri og pestó`,
  `Eldsteikt nautafille með ferskum kryddjurtum
  Ristað kryddlegið lambalæri
  Smjörgljáðar kalkúnabringur
  Purusteik
  Gratíneraður skötusels Terrine`,
  `Ristað ferskt grænmeti, steikar kartöflur, gratíneraðar kartöflur,
  eplasalati, rjómalöguð sveppasósa, púrtvínsbætt piparsósa.
  Salatfat með fersku grænmeti og ávöxtum`,
];

// tslint:disable:max-line-length
const containerStyle = style(vertical, {});

export const Steikarhladbord = () => (
  <div className={containerStyle}>
    <HeaderImage
      header='Steikarhladborð'
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
  </div>
);
