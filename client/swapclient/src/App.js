import React, { useState } from 'react';
import Exchanger from './components/Exchanger';
import Navbar from './components/Navbar';
import Pool from './components/Pool';
import Popup from './components/Popup';
import Tokens from './components/Tokens';
import Wallets from './components/Wallets';
import cloud1 from "./images/cloud1.png";
import cloud2 from "./images/cloud2.png";
import cloud3 from "./images/cloud3.png";
import cloud4 from "./images/cloud4.png";
import cloud5 from "./images/cloud5.png";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Token from './components/Token';

function App() {
  const [wallet, setWallet] = useState(false)
  const [visible, setVisible] = useState(false)
  return (
    <div className="absolute z-10 backg bg-scroll bg-cover w-full h-[100vh] pb-4">
      <div className="cloud">
          <img src={cloud1} alt="" />
          <img src={cloud2} alt="" />
          <img src={cloud3} alt="" />
          <img src={cloud4} alt="" />
          <img src={cloud5} alt="" />
      </div>
      <Navbar wallet={wallet} setWallet={setWallet} setVisible={setVisible}/>
      <BrowserRouter>
        <Routes>
        {/* <Exchanger wallet={wallet} setWallet={setWallet}/> */}
          <Route path="/" element={<Exchanger wallet={wallet} setWallet={setWallet}/>}/>
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/pool" element={<Pool />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          
        </Routes>
      </BrowserRouter>
      {wallet && <Wallets setWallet={setWallet}/>}
      {visible && <Popup network={true} setVisible={setVisible}/>}
    </div>
  );
}

export default App;
