import React, { useState } from "react";
import { token_backend, canisterId ,createActor } from "../../../declarations/token_backend";
import { AuthClient } from "@dfinity/auth-client";
import Header from "./Header";

function Faucet(props) {
  
  const [buttonText,setText]=useState("Gimme gimme"); 
  const[isDisabled,setDisabled]=useState(false);


  async function handleClick() {
    setDisabled(true);
    const authClient=await AuthClient.create();
    const identity=await authClient.getIdentity();
    const authenticatedCanistr=createActor(canisterId,{
      agentOptions:{
        identity,
      },
    })
    const res=await authenticatedCanistr.payOut();
    setText(res);
    // setDisabled(false);
  }

  return (
    <div id="screen">
        <Header />
        

    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          💵
        </span>
        Faucet
      </h2>
      <label>Get your free QuantumByte tokens here! Claim 10,000 QBTE tokens to {props.user_principal}</label>
      <p className="trade-buttons">
        <button id="btn-payout" 
        onClick={handleClick}
        disabled={isDisabled}>
          {buttonText}
        </button> 
      </p>
    </div>
    </div>
  );
}

export default Faucet;
