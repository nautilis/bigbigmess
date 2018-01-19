import React from 'react';

export default class MobileHeader extends React.Component{
  render(){
    return(
      <div id="mobile-header">
        <header>
          <img src="./src/images/logo.png"/>
          <span >ReactNews</span>
        </header>
      </div>
    );
  }
}