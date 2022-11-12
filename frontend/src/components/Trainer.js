/*global AlgoSigner*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import AssetActionView from "./AssetActionView";
import { SubmitButton } from "./common";
import CreatAsset from "./CreateAsset";
// import MyAlgoWallet from './MyAlgoWallet/MyAlgoWallet'

const Trainer = () => {
    const handleLogout=()=>{
      sessionStorage.removeItem('token');
    }

  const handleGetAccount = async () => {
      try {
        await AlgoSigner.connect()
        const r = await AlgoSigner.accounts({
          ledger: 'TestNet'
        });
         console.log(r[0].address);
        // setAccount(JSON.stringify(r, null));
        setAccount(r[0].address);
      } catch (e) {
        console.error(e);
        return JSON.stringify(e, null, 2);
      }
    }

  const [account ,setAccount] = useState("")

    return (
       <> 
       <Router>
        <nav className='navbar'>
            <h1>Algorand Based Certificate Generation</h1>
            <div className="links">
                <a href="./create"
                style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px'
                }}> Create</a>
                <a href="./list" 
                style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px' 
                    }}>View</a>
            
                <a href="./" onClick={handleLogout}
                style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px' 
                    }}>Signout</a>
            </div>
        </nav>
        <p>{account}</p>
      <SubmitButton onClick={handleGetAccount}>connect</SubmitButton>
       <Routes>
          <Route exact path='/create' element={< CreatAsset account={account}/>}></Route>
          <Route exact path='/list' element={<AssetActionView />}></Route>
        </Routes>
         </Router>
        </>
      );
}
 
export default Trainer