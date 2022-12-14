/*global AlgoSigner*/
import React, {useRef, useState} from "react";
import { FormStyle } from "./Form.style";
import { TransactionButton } from "./Button.style";
import { BodyText } from "./MyAlgoWallet/MyAlgoWallet.style";
import { TOKEN, ALGOD_SERVER, PORT} from "./constants";
const algosdk = require("algosdk");

const CreateAsset = ({account}) => {
    console.log('the address',account)

    const assetName = useRef()
    const unitName = useRef()
    const totalUnit = useRef()
    const note = useRef()
    const decimals = useRef()
    const assetURL = useRef()
    const [isLoading, setLoading] = useState(false)

    const createAsset = async () =>{
        // await AlgoSigner.connect();
        setLoading(true)
        let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)

        //Query Algod to get testnet suggested params
        let txParamsJS = await client.getTransactionParams().do()
        console.log(txParamsJS);

        try{

            const txn = await new algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
                from: account,
                assetName: assetName.current,
                unitName: unitName.current,
                total: +totalUnit.current,
                decimals: +decimals.current,
                note: AlgoSigner.encoding.stringToByteArray(note.current),
                assetURL: assetURL.current,
                suggestedParams: txParamsJS
              });

            const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(txn.toByte());

             let signedTxs  = await AlgoSigner.signTxn([{txn: txn_b64}])
              console.log(signedTxs)

              // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);

             // Send the transaction through the SDK client
            let id = await client.sendRawTransaction(binarySignedTx).do();
                console.log(id)
                setLoading(false)

        }catch(err){
            console.log(err)
            setLoading(false)
        }
    }

    return(
    <div>
        <div>
            <BodyText>Create Asset</BodyText>
            <FormStyle onChange = {(e) => assetName.current = e.target.value} placeholder="Asset name" /><br/>
            <FormStyle onChange = {(e) => unitName.current = e.target.value} placeholder="Unit name" /><br/>
            <FormStyle onChange = {(e) => totalUnit.current = e.target.value} placeholder="Total units" /><br/>
            <FormStyle onChange = {(e) => decimals.current = e.target.value} placeholder="Decimals" /><br/>
            <FormStyle onChange = {(e) => note.current = e.target.value} placeholder="Enter note" /><br/>
             <FormStyle onChange = {(e) => assetURL.current = e.target.value} placeholder="Enter asset URL" /><br/>
            <TransactionButton backgroundColor onClick = {createAsset}>{isLoading ? "loading...": "Sign Create Asset"}</TransactionButton>
        </div>
    </div>
    )
}

export default CreateAsset