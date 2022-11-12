const ALGOD_SERVER = "https://testnet-algorand.api.purestake.io/ps2"//"https://academy-algod.dev.aws.algodev.network/"
const INDEXER_SERVER = "https://testnet-algorand.api.purestake.io/idx2"
const TOKEN = { 'X-API-Key': 'm9YHqmUWNV7YwZBxZmct38FyDhShtz1229byFeAz' }
const PORT = '443';
const HEADERS = {
    "Access-Control-Allow-Origin":"http://localhost:3000",
    "Access-Control-Allow-Credentials": "true"
}


module.exports = {
    ALGOD_SERVER,
    INDEXER_SERVER,
    TOKEN,
    PORT,
    HEADERS
}