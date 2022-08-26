import React from 'react';
import logo from './images/pencil.png';
const Header =()=> {
  return(
  <>
  <div className="header">
      <img src={logo} alt="logo" width="70" height="50" />
      <h1 class="text1"> !Notes Taking App!</h1>
  </div>
  </>
  );
};
export default Header;
