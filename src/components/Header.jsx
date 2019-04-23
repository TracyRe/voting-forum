import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Vote Forum</h1>
      <Link to="/">Home</Link> | <Link to='/makepost'>New Post</Link>
    </div>
  );
}

export default Header;
