import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function Header() {
  return (
    // <BrowserRouter>
    <header>
      <div className="blue window" id="logo">
        <h1>
          <span role="img" aria-label="tap emoji">
            <img src="../nobg.png" width="200"
            />
          </span>
          <p style={{ margin: '0' }}>

            Tokenforge
          </p>
        </h1>
      </div>
      <div className="main_btn">

        <div className="blue btn2" id="logo">

          <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
            <p style={{ textAlign: "center" }}>

              Home
            </p>
          </Link>
        </div>


        <div className="blue btn2" id="logo">

          <Link to="/faucet" style={{ textDecoration: 'none', color: 'black' }}>
            <p style={{ textAlign: "center" }}>

              Faucet
            </p>
          </Link>
        </div>

        <div className="blue btn2" id="logo">

          <Link to="/balance" style={{ textDecoration: 'none', color: 'black' }}>
            <p style={{ textAlign: "center" }}>

              Balance
            </p>
          </Link>
        </div>
        <div className="blue btn2" id="logo">

          <Link to="/transfer" style={{ textDecoration: 'none', color: 'black' }}>
            <p style={{ textAlign: "center" }}>

              Transfer
            </p>
          </Link>
        </div>
      </div>
    </header>
    //   <BrowserRouter>
    //    <Routes>

    //      <Route exact path="/faucet" element={<Faucet />} />
    //      <Route exact path="/balance" element={<Balance />} />
    //      <Route exact path="/transfer" element={<Transfer />} />

    //    </Routes>

    // </BrowserRouter>
  );
}

export default Header;
