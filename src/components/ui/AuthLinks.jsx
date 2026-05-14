import React from 'react';
import MyNavlink from './MyNavlink';

const AuthLinks = () => {
  return (
    <>
   <li><MyNavlink href={'/login'}>Login</MyNavlink></li>
   <li><MyNavlink href={'/signup'}>Sign Up</MyNavlink></li>
    </>
  );
};

export default AuthLinks;