/* global AlgoSigner */
import TraineeList from "./TraineeList";
import  { useState, useEffect } from "react";
import { TOKEN, ALGOD_SERVER, PORT, INDEXER_SERVER} from "./constants";
import algosdk from "algosdk";
import { Button } from "./Button.style";
const AssetActionView = () => {
    const [courses, setCourses] = useState([])
    const handleOptin = (id)=>{
        const newCourses= courses.filter(course=>course.id !== id);
        setCourses(newCourses);
      }
    const handleTransfer=(e)=>{
            console.log('click',e);
        }
      
  const handleAssetList = async () => {
    await AlgoSigner.connect();
    let algodClient = new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT);
    let indexerClient = new algosdk.Indexer(TOKEN, INDEXER_SERVER, PORT);

      const r = await AlgoSigner.accounts({ledger: 'TestNet'});
      let accountInfo = await algodClient.accountInformation(r[0].address).do();
      setAccount(r[0].address);

      console.log(accountInfo);
      let assets=[]
        for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
            let scrutinizedAsset = accountInfo['created-assets'][idx];
            let assetInfo = await indexerClient.lookupAssetBalances( scrutinizedAsset['index']).do();
            let optedin = []
               for (let i = 0; i < assetInfo.balances.length; i++) {
                if(assetInfo.balances[i].amount == 0){
                   optedin.push(assetInfo.balances[i].address);
                } 
               }
            assets.push({'title':scrutinizedAsset.params.name,'body':scrutinizedAsset.params.total,'author':scrutinizedAsset.params.creator,'id': scrutinizedAsset.index,'address':optedin,'value':[]});

        }
        console.log(assets)
        setCourses(assets);
  }
    const [account ,setAccount] = useState("")

    return (  
        <div className='home'>
          <TraineeList courses={courses} title="Assets" handleTransfer={handleTransfer} />
          {/* <TraineeList courses={courses.filter((course) => course.author === 'mario')} title="Mario's Blogs" handleOptin={handleOptin} /> */}
          <p>{account}</p>
            <Button onClick={handleAssetList}> Get List</Button>
            {/* <button onClick={hanldeGetAssetStatus}>getAccount</button> */}
        </div>
    );
}
 
export default AssetActionView;