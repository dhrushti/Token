
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Faucet from "../src/components/Faucet";
import Balance from "../src/components/Balance";
import Transfer from "../src/components/Transfer";
import LandingPage from "./LP/LandingPage";
import App1 from "./components/App1";
import Game from "./components/Game";
import { Navigation } from "./LP/navigation";

function App(props) {

  

  return (
    <BrowserRouter>
      <div id="screen">
        {/* <Header /> */}
        {/* <LandingPage/> */}
        {/* <Navigation/> */}
        {/* <Faucet user_principal={props.userOptn} />
        <Balance />
        <Transfer /> */}

      </div>

      <Routes>
        {/* <Route path='/' element={<App userOptn={user_principal} />} /> */}

        <Route exact path="/faucet" element={<Faucet user_principal={props.userOptn}/>} />
        <Route exact path="/balance" element={<Balance />} />
        <Route exact path="/transfer" element={<Transfer />} />
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<App1 />} />
        <Route exact path="/game" element={<Game/>}/>


      </Routes>

    </BrowserRouter>
  );
}

export default App;
