import * as React from 'react';
import { style } from 'typestyle';
import { PinnNo5Hero } from './PinnNo5Hero';

const homeStyle = style({

});

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={homeStyle}>
        <PinnNo5Hero />
      </div>
    );
  }
}
