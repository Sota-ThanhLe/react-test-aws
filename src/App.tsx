import React, { useEffect } from 'react';
import './App.css';
import Web3 from 'web3';
declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

function App() {
  const web3 = new Web3(window.ethereum);
  useEffect(() => {
    (async () => {
      const rs = await web3.eth.getAccounts();
      console.log(rs);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p className="italic text-3xl text-yellow-300">Chainprotocol</p>
      </header>
    </div>
  );
}

export default App;
