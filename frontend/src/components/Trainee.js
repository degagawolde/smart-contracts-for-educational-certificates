/*global AlgoSigner*/
import { useState } from "react";
import CourseList from "./CourseList";
import { SubmitButton } from "./common";
import { TOKEN, ALGOD_SERVER, PORT, INDEXER_SERVER} from "./constants";
import algosdk from "algosdk";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import DropdownList from "react-widgets/DropdownList";
import { Button } from "./Button.style";
const Trainee = () => {

    const [account ,setAccount] = useState("")
    const [accounts ,setAccounts] = useState([])
    const [rcourses, setRCourses] = useState([]);
    const [ncourses, setNCourses] = useState([])
  const handleOptin = (id)=>{
    
  }
  const logout=()=>{
      
      sessionStorage.removeItem('token');
      // window.location.reload(false);
      // history.push('/smart-contracts-for-educational-certificates');
    }

  const handleGetAccount = async () => {
      try {
        await AlgoSigner.connect();
        const r = await AlgoSigner.accounts({ledger: 'TestNet'});
         console.log(r);
        // setAccount(JSON.stringify(r, null));
        let acnt = []
        for(let j=0;j<r.length;j++){
          acnt.push(r[j].address);
        }
        setAccounts(acnt);

      } catch (e) {
        console.error(e);
        return JSON.stringify(e, null, 2);
      }
    }
  const handleAssetList = async () => {
    await AlgoSigner.connect();
    let algodClient = new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT);
    let indexerClient = new algosdk.Indexer(TOKEN, INDEXER_SERVER, PORT);

      let accountInfo = await algodClient.accountInformation(account).do();

      let requestedAssets=[]
      let transferedAssets=[]
        for (let idx = 0; idx < accountInfo['assets'].length; idx++) {
            let scrutinizedAsset = accountInfo['assets'][idx];
            let assetInfo = (await indexerClient.searchForAssets().index(scrutinizedAsset['asset-id']).do())['assets'];
            console.log(assetInfo)
            if(scrutinizedAsset['amount']>0){
              transferedAssets.push({'title':assetInfo[0].params.name,'body':assetInfo[0].params.total,'author':assetInfo[0].params.creator,'id': assetInfo[0].index,'url':assetInfo[0].params.url,'status':'transfered'});
            }
            else{
             requestedAssets.push({'title':assetInfo[0].params.name,'body':assetInfo[0].params.total,'author':assetInfo[0].params.creator,'id': assetInfo[0].index,'url':assetInfo[0].params.url,'status':'opted'});
            }
          }
        setNCourses(requestedAssets);
        setRCourses(transferedAssets);
      }
     
    return (
      <>
        <Router>
        <nav className='navbar'>
          <h1>Algorand Certificate Generation</h1>
          <div className="links">
            <Link to="/opted" style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: '8px'
            }}> opted</Link>
            <Link to="/owned" style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: '8px'
            }}> owned</Link>

            <a href="/smart-contracts-for-educational-certificates" onClick={logout}
              style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: '8px'
              }}>Signout</a>
          </div>
        </nav>
        <SubmitButton onClick={handleGetAccount}>connect</SubmitButton>
         <p></p>
        <DropdownList 
          data={accounts}
          // value={value}
          onChange={value =>setAccount(value)}
        />
         <Routes>
            <Route exact path='/opted' element={<CourseList  courses={ncourses} title="New Certificates" handleOptin={handleOptin} account={account}/>}></Route>
            <Route exact path='/owned'  element={<CourseList courses={rcourses} title="Requested Certificates" handleOptin={handleOptin} account={account}/>}></Route>
         </Routes>
        </Router>
        <Button onClick={handleAssetList} >get asset</Button>
        </>
      );
}
export default Trainee
