
import React, { useState } from "react";

function Game() {
    const [r, setR] = useState("");
    const [change, setChange] = useState(50);
    const [multi, setMulti] = useState(25);
    const [randomX, setRandomX] = useState();
    const [winP, setwinP] = useState(50);
    const [betAmount, setBetamount] = useState(0);
    const [finalVar, setfinalVar] = useState(0);


    const dictionary = {};
    for (let i = 1; i <= 100; i++) {
        dictionary[i] = i / 2;
    }
    dictionary[100] = 0;

    function handleChange(e) {
        const value = e.target.value;
        setChange(value);
        setMulti(dictionary[value]);
    }

    function handleChange2(e) {
        const val = e.target.value;
        // if (finalVar >= val) {
        setBetamount(val);
        // }
        // else {
        // setBetamount(0);
        // }
    }
    const [isInputVisible, setInputVisible] = useState(false);

    // Step 2: Function to toggle visibility
    const setDeposit = () => {
        setInputVisible(true);
    };
    const game1 = (e) => {
        e.preventDefault();

        const a = change;
        const x = Math.round(Math.random() * 100 * 100) / 100;
        console.log(x);
        setRandomX(x);

        let result;
        if (a <= x) {
            result = "win";
        } else {
            result = "lose";
        }
        setR(result);
        console.log(result);
        const finalAm = multi * betAmount;
        if (result == "win") {
            setfinalVar(finalVar + finalAm);
        }
        else if (result == "lose") {
            setfinalVar(finalVar - betAmount);
        }
    };

    return (
        <div className="outerdiv">

            <h4 style={{ textAlign: "center" }}>Balance: {finalVar} QBTE</h4>
            <div className="game">
                <label htmlFor="bet">Bet Amount</label>
                <input className="bet" id="inputamt" type="number" name="bet" onChange={handleChange2} />
                <input className="num1" type="range" min="1" max="100" name="num1" value={change} onChange={handleChange} />
                <p>Rollover: {change}</p>
                <p>Multiplier: {multi}x</p>
                <p>Guessed: {randomX}</p>
                <p>Win chance: {100 - change}%</p>
                <button className="btng" type="submit" onClick={game1}>
                    Submit
                </button>

                <br />
                <br />


                <div className="resultg">
                    <p style={{ textAlign: "center" }}>Result: {r}</p>
                </div>
                <div style={{ display: 'flex' }}>

                    <button id='deposit' className="btng" style={{ margin: '1rem' }} onClick={setDeposit}>Deposit</button>
                    <button className="btng" style={{ margin: '1rem' }}>Withdraw</button>
                </div>
                <div className="input-container">
                    {isInputVisible && (
                        <div>
                        <input
                            className="bet"
                            type="text"
                            placeholder="Amount"
                            style={{ display: 'block' ,paddingRight:"50px"}}
                        />
                    <button type="submit" class="submit-button">--→</button>
                    </div>
                    )}
                
                 </div>

            </div>
        </div>
    );
}

export default Game;
