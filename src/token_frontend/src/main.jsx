// import React from 'react';
// import ReactDOM from "react-dom";
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import {AuthClient} from "@dfinity/auth-client";




// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// // );

// const init= async () => {
//   const authClient=await AuthClient.create();
//   if(await authClient.isAuthenticated()){
//     handleAuthenticated(authClient);
//   }
//   else{
//     await authClient.login({
//       identityProvider:"https://identity.ic0.app/#authorize",
//       onSuccess:()=>{
//         handleAuthenticated(authClient);
//       }
//     });
//   }
// }
// async function handleAuthenticated(authClient){
//   ReactDOM.render(<App/>,document.getElementById("root"));
// }
// init();

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './style.css';
import './bootstrap.css';

// import App1 from './components/App1';
import { AuthClient } from '@dfinity/auth-client';

// Initialization function
const init = async () => {
  const authClient = await AuthClient.create();
  if (await authClient.isAuthenticated()) {
    handleAuthenticated(authClient);
  } else {
    await authClient.login({
      identityProvider: "https://identity.ic0.app/#authorize",
      onSuccess: () => {
        handleAuthenticated(authClient);
      },
    });
  }
};

// Function to handle authentication
async function handleAuthenticated(authClient) {
  const user_principal=await authClient.getIdentity()._principal.toString();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App userOptn={user_principal}/>
      {/* <App1/> */}
    </React.StrictMode>
  );
}

// Start the initialization process
init();
