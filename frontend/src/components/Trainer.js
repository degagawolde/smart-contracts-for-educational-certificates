/*global AlgoSigner*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from "react";
import AssetActionView from "./AssetActionView";
import { SubmitButton } from "./common";
import CreatAsset from "./CreateAsset";
// import algosdk from "algosdk";
// import { TOKEN, ALGOD_SERVER, PORT, INDEXER_SERVER} from "./constants";
// import MyAlgoWallet from './MyAlgoWallet/MyAlgoWallet'

const Trainer = () => {
  
  const [account ,setAccount] = useState("");
  const assetList = [];
  
  const handleLogout=()=>{
      sessionStorage.removeItem('token');
      // window.location.reload(false);
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


    return (
       <> 
       <Router>
        <nav className='navbar'>
            <h1>Algorand Based Certificate Generation</h1>
            <div className="links">
                <Link to="/create"
                style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px'
                }}> Create</Link>
                <Link to="/list" 
                style={{
                    color:"white",
                    backgroundColor:"#f1356d",
                    borderRadius:'8px' 
                    }}>View</Link>
            
                <a href="/smart-contracts-for-educational-certificates" onClick={handleLogout}
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
          <Route exact path='/list' element={<AssetActionView assetList={assetList}/>}></Route>
        </Routes>
         </Router>
        </>
      );
}
 
export default Trainer