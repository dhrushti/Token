import React, { useState } from "react";
import {Principal} from '@dfinity/principal';
import {token_backend} from '../../../declarations/token_backend';
import Header from "./Header";

function Balance() {
  const [inputValue,setinputValue]=useState("");
  const [balanceResult,setbalanceResult]=useState("");
  const [symbol,setSymbol]=useState("");



  
  async function handleClick() {
    console.log(inputValue);
    const principal=Principal.fromText(inputValue);
    const balance=await token_backend.balanceOf(principal);
    const symbol1=await token_backend.getSymbol();

    setbalanceResult(balance.toLocaleString());
    setSymbol(symbol1);


  
    
  }
  


  return (
  <div id="screen">
  <Header />


    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e)=>{
            setinputValue(e.target.value);
            
          }}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p>This account has a balance of {balanceResult} {symbol}</p>
    </div>
    </div>
  );
}

export default Balance;
