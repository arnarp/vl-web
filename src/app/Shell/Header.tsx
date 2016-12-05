import * as React from 'react';
import { style } from 'typestyle';

const headerStyle = style({
  color: 'red',
  display: 'flex',
});

const buttonStyle = style({
  color: 'red',
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
