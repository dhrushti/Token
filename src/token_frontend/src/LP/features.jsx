import React, { useState, useEffect } from "react";
import PsychologyIcon from '@mui/icons-material/Psychology';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import SecurityIcon from '@mui/icons-material/Security';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import JsonData from "./data.json";

export const Features = (props) => {
  const featureStyle = {
    paddingTop: '10rem', 
    paddingBottom: '3rem',
    margin: '5rem',
    borderRadius: '1rem',
  };

  const [landingPageData, setLandingPageData] = useState({});
  
  
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const icons = [<PsychologyIcon fontSize="large" sx={{fontSize: '8rem'}} />, <CurrencyBitcoinIcon fontSize="large" sx={{fontSize: '8rem'}} />, <SecurityIcon fontSize="large" sx={{fontSize: '8rem'}} />, <QueryStatsIcon fontSize="large" sx={{fontSize: '8rem'}} />]
  return (
    <div id="features" className="text-center" style={featureStyle}>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {landingPageData.Features
            ? landingPageData.Features.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  {icons[i]}
                  {/* <QueryStatsIcon fontSize="large" sx={{fontSize: '8rem'}} /> */}
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
