/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import 'src/App.css';
declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <p className='italic text-3xl text-yellow-300'>Chainprotocol</p>
      </header>
    </div>
  );
};

export default App;
