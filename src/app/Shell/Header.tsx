import * as React from 'react';
import { style } from 'typestyle';

const headerStyle = style({
  display: 'flex',
});

const buttonStyle = style({
});

export default class Header extends React.Component<any, any> {
  public render() {
    return (
      <div className={headerStyle}>
        <button className={buttonStyle}>Yfirlit</button>
      </div>
    );
  }
}
        // <img src={require('./logo.png')} />
