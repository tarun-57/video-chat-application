import React from 'react';
import ReactDOM from 'react-dom/client';
import  {ContextProvider}  from './SocketContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <App />
  </ContextProvider>
);