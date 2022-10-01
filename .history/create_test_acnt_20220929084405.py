from algosdk import account, mnemonic
from algosdk.v2client import algod

def generate_algorand_keypair():
    private_key, address = account.generate_account()
    print(private_key,address)
    print("My address: {}".format(address))
    print("My private key: {}".format(private_key))
    print("My passphrase: {}".format(mnemonic.from_private_key(private_key)))
    
    return private_key,address

def first_transaction_example(private_key, my_address):
    algod_address = "http://localhost:4001"
    algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    algod_client = algod.AlgodClient(algod_token, algod_address)
    print(algod_client)
    
private_key, address =  generate_algorand_keypair()

first_transaction_example(private_key,address)