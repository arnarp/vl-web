import * as React from 'react';

export default class Header extends React.Component<any, any> {
  public render() {
    require('./Header.css');

    return (
      <div>
        <button>Yfirlit</button>
        <img src={require('./logo.png')} />
      </div>
    );
  }
}
