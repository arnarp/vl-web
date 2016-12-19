import * as React from 'react';
import { style } from 'typestyle';

const divStyle = style({

});

export const HladbordMain = () => (
  <div>
    <img src='https://s3-eu-west-1.amazonaws.com/vl-web/images/_Q1A1208_900.jpg' />
    <div className={divStyle}>
      Foo
    </div>
  </div>
);
