import React, { useState } from "react";
import { canisterId,createActor } from "../../../declarations/token_backend";
import { AuthClient } from "@dfinity/auth-client";
import { Principal } from "@dfinity/principal";
import Header from "./Header";
function Transfer() {
  const [reciepientId,setReciepientId]=useState("");
  const [amount,setAmount]=useState("");
  const [isHidden, setHidden] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [isDisabled, setDisable] = useState(false);

  
  async function handleClick() {
    setHidden(true);
    setDisable(true);
    const reciepient=Principal.fromText(reciepientId);
    const amountToTransfer=Number(amount);
    const authClient=await AuthClient.create();
    const identity=await authClient.getIdentity();
    const auth_canister=createActor(canisterId,{
      agentOptions:{
        identity,
      },
    });
    

    const result=await auth_canister.transfer(reciepient,amountToTransfer); 
    setFeedback(result);
    setHidden(false);
    setDisable(false);   
  }

  return (
    <div id="screen">
        <Header />
        
    <div className="window white">
      <div className="transfer"> 
      <div  style={{display: 'flex'}}>
        <fieldset style={{marginRight:'1rem'}}>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                value={reciepientId}
                onChange={(e)=>{
                  setReciepientId(e.target.value);
                }}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset style={{marginLeft: '1rem'}}>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e)=>{
                  setAmount(e.target.value);
                }}

                />
            </li>
          </ul>
        </fieldset>
        </div>
        <p className="trade-buttons">
          <button id="btn-transfer" onClick={handleClick} disabled={isDisabled} >
            Transfer
          </button>
        </p>
        <p hidden={isHidden}>{feedback}</p>
      </div>
    </div>
    </div>
  );
}

export default Transfer;
