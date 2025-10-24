import React from 'react';
import Chatbot from './pages/chatbot';
import { useState } from 'react';
import SignIn from './auth/SignIn';

const App = () => {

  const [auth, setAuth] = useState(false);

function authorizeUser(){
  setAuth(true);
}

if(!auth) return <SignIn authorizeUser={authorizeUser}/>
  return (
    <div>
    <Chatbot/>
    </div>
  );
}

export default App;
