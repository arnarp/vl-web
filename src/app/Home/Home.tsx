import * as React from 'react';
import { style } from 'typestyle';
import { VlLogoRed } from '../Shell/colors';

const homeStyle = style({
  textAlign: 'center',
  color: VlLogoRed.darken(0.1),
});

export default class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={homeStyle}>
        <p>Hello!</p>
      </div>
    );
  }
}
