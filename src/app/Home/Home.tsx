import * as React from 'react';
import { style } from 'typestyle';

const homeStyle = style({
  textAlign: 'center',
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
