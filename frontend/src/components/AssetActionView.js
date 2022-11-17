/* global AlgoSigner */
import AssetList from "./AssetList";
import  { useState, } from "react";
import { TOKEN, ALGOD_SERVER, PORT, INDEXER_SERVER} from "./constants";
import algosdk from "algosdk";
import { Button } from "./Button.style";
import { send } from "process";
const AssetActionView = ({account}) => {
    const [courses, setCourses] = useState([])
    const handleTransfer=async (sender,recipient,assetID,note)=>{
      console.log("sender=>"+(typeof sender)+sender.length,sender);

      console.log("recipient=>"+(typeof recipient[0])+recipient[0].length,recipient[0]);
      console.log("asssetId=>",assetID);
      console.log("note=>",note);
      let algodClient = new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT);
      let txParamsJS = await algodClient.getTransactionParams().do()
      let amount = 1;
      try{
        const xtxn = await new algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
            from:sender,
            to:recipient[0],
            amount:amount,
            note: AlgoSigner.encoding.stringToByteArray(note), 
            assetIndex:assetID, 
            suggestedParams: txParamsJS
          });

        // Must be signed by the account sending the asset  
        const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(xtxn.toByte());
        let signedTxs  = await AlgoSigner.signTxn([{txn: txn_b64}])
        console.log(signedTxs)
        // Get the base64 encoded signed transaction and convert it to binary
        let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
        // Send the transaction through the SDK client
        let id = await algodClient.sendRawTransaction(binarySignedTx).do();                  
      }catch(err){
            console.log(err)
        }
            
    }
      
  const handleAssetList = async () => {
    await AlgoSigner.connect();
    let algodClient = new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT);
    let indexerClient = new algosdk.Indexer(TOKEN, INDEXER_SERVER, PORT);

      let accountInfo = await algodClient.accountInformation(account).do();

      console.log(accountInfo);
      let assets=[]
        for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
            let scrutinizedAsset = accountInfo['created-assets'][idx];
            let assetInfo = await indexerClient.lookupAssetBalances( scrutinizedAsset['index']).do();
            let optedin = []
               for (let i = 0; i < assetInfo.balances.length; i++) {
                if(assetInfo.balances[i].amount === 0){
                   optedin.push(assetInfo.balances[i].address);
                } 
               }
            assets.push({'title':scrutinizedAsset.params.name,'body':scrutinizedAsset.params.total,'author':scrutinizedAsset.params.creator,'id': scrutinizedAsset.index,'address':optedin,'url':scrutinizedAsset.params.url});

        }
        console.log(assets)
        setCourses(assets);
  }
    

    return (  
        <div className='home'>
           <Button onClick={handleAssetList}> Get List</Button>
          <AssetList courses={courses} title="" handleTransfer={handleTransfer} />
           
        </div>
    );
}
 
export default AssetActionView;