import { Button } from "../../Button.style";

const ConnectButton = ({connectWallet}) => {
    return(
        <Button onClick ={connectWallet}>
           Connect MyAlgo Wallet
        </Button>
    )
}

export default ConnectButton